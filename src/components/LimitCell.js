import { memo } from "react";
import { useAppState, useAppDispatch } from "../context/AppContext";
import { APP_ACTIONS } from "../reducers/appReducer";

function Cell({ row, column }) {
  const state = useAppState();
  const cell = state.grid[row][column];
  return <MemoCellImpl cell={cell} row={row} column={column} />;
  // const dispatch = useAppDispatch();
  // const handleClick = () =>
  //   dispatch({ type: APP_ACTIONS.UPDATE_GRID_CELL, row, column });
  // return (
  //   <button
  //     className="cell"
  //     onClick={handleClick}
  //     style={{
  //       color: cell > 50 ? "white" : "black",
  //       backgroundColor: `rgba(0, 0, 0, ${cell / 100})`,
  //     }}>
  //     {Math.floor(cell)}
  //   </button>
  // );
}

function CellImpl({ cell, row, column }) {
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
const MemoCellImpl = memo(CellImpl);

export default memo(Cell);
