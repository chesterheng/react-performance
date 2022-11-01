import { updateGridCellState, updateGridState } from "../utils/updateGrid";

const APP_ACTIONS = {
  TYPED_IN_DOG_INPUT: "TYPED_IN_DOG_INPUT",
  UPDATE_GRID_CELL: "UPDATE_GRID_CELL",
  UPDATE_GRID: "UPDATE_GRID",
};

function appReducer(state, action) {
  switch (action.type) {
    case APP_ACTIONS.TYPED_IN_DOG_INPUT: {
      return { ...state, dogName: action.dogName };
    }
    case APP_ACTIONS.UPDATE_GRID_CELL: {
      return { ...state, grid: updateGridCellState(state.grid, action) };
    }
    case APP_ACTIONS.UPDATE_GRID: {
      return { ...state, grid: updateGridState(state.grid) };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export { APP_ACTIONS, appReducer };
