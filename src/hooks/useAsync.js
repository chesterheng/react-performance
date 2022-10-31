import { useRef, useReducer, useCallback } from "react";
import { useSafeDispatch } from "./useSafeDispatch";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  REJECTED: "rejected",
  RESOLVED: "resolved",
};

const defaultInitialState = { status: STATUS.IDLE, data: null, error: null };

function useAsync(initialState) {
  const initialStateRef = useRef({
    ...defaultInitialState,
    ...initialState,
  });
  const [{ status, data, error }, setState] = useReducer(
    (s, a) => ({ ...s, ...a }),
    initialStateRef.current
  );

  const safeSetState = useSafeDispatch(setState);

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
        );
      }
      safeSetState({ status: STATUS.PENDING });
      return promise.then(
        (data) => {
          safeSetState({ data, status: STATUS.RESOLVED });
          return data;
        },
        (error) => {
          safeSetState({ status: STATUS.REJECTED, error });
          return error;
        }
      );
    },
    [safeSetState]
  );

  const setData = useCallback((data) => safeSetState({ data }), [safeSetState]);
  const setError = useCallback(
    (error) => safeSetState({ error }),
    [safeSetState]
  );
  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  );

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === STATUS.IDLE,
    isLoading: status === STATUS.PENDING,
    isError: status === STATUS.REJECTED,
    isSuccess: status === STATUS.RESOLVED,

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  };
}

export { useAsync, STATUS };
