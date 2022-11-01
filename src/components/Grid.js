import { memo } from "react";
import { useAppDispatch } from "../context/AppContext";
import { useDebouncedState } from "../hooks/useDebouncedState";
import { APP_ACTIONS } from "../reducers/appReducer";
import AppGrid from "./AppGrid";
import Cell from "./Cell";

function Grid() {
  const dispatch = useAppDispatch();
  const [rows, setRows] = useDebouncedState(50);
  const [columns, setColumns] = useDebouncedState(50);
  const updateGridData = () => dispatch({ type: APP_ACTIONS.UPDATE_GRID });
  return (
    <AppGrid
      onUpdateGrid={updateGridData}
      rows={rows}
      handleRowsChange={setRows}
      columns={columns}
      handleColumnsChange={setColumns}
      Cell={Cell}
    />
  );
}

export default memo(Grid);
