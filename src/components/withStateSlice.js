import { memo, forwardRef } from "react";
import { useAppState, useAppDispatch } from "../context/AppContext";
import { APP_ACTIONS } from "../reducers/appReducer";

function withStateSlice(Comp, slice) {
  const MemoComp = memo(Comp);
  function Wrapper(props, ref) {
    const state = useAppState();
    return <MemoComp ref={ref} state={slice(state, props)} {...props} />;
  }
  Wrapper.displayName = `withStateSlice(${Comp.displayName || Comp.name})`;
  return memo(forwardRef(Wrapper));
}

function Cell({ state: cell, row, column }) {
  const dispatch = useAppDispatch();
  const handleClick = () =>
    dispatch({ type: APP_ACTIONS.UPDATE_GRID_CELL, row, column });
  return (
    <button
      className="cell"
      onClick={handleClick}
      style={{
        color: cell > 50 ? "white" : "black",
        backgroundColor: `rgba(0, 0, 0, ${cell / 100})`,
      }}>
      {Math.floor(cell)}
    </button>
  );
}

export default withStateSlice(
  Cell,
  (state, { row, column }) => state.grid[row][column]
);
