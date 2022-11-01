import { createContext, useReducer, useContext } from "react";
import { appReducer } from "../reducers/appReducer";

const initialGrid = Array.from({ length: 100 }, () =>
  Array.from({ length: 100 }, () => Math.random() * 100)
);

const AppStateContext = createContext();
AppStateContext.displayName = "AppStateContext";

const AppDispatchContext = createContext();
AppDispatchContext.displayName = "AppDispatchContext";

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    dogName: "",
    grid: initialGrid,
  });
  // const value = useMemo(() => [state, dispatch], [state])
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw new Error("useAppDispatch must be used within the AppProvider");
  }
  return context;
}

export { AppProvider, useAppState, useAppDispatch };
