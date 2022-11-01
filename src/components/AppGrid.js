import { useState } from "react";
import Interval from "./Interval";

function AppGrid({
  onUpdateGrid,
  rows,
  handleRowsChange,
  columns,
  handleColumnsChange,
  Cell,
}) {
  const [keepUpdated, setKeepUpdated] = useState(false);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <button type="button" onClick={onUpdateGrid}>
            Update Grid Data
          </button>
        </div>
        <div>
          <label htmlFor="keepUpdated">Keep Grid Data updated</label>
          <input
            id="keepUpdated"
            checked={keepUpdated}
            type="checkbox"
            onChange={(e) => setKeepUpdated(e.target.checked)}
          />
          {keepUpdated ? (
            <Interval onInterval={onUpdateGrid} interval={500} />
          ) : null}
        </div>
        <div>
          <label htmlFor="rows">Rows to display: </label>
          <input
            id="rows"
            defaultValue={rows}
            type="number"
            min={1}
            max={100}
            onChange={(e) => handleRowsChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="columns">Columns to display: </label>
          <input
            id="columns"
            defaultValue={columns}
            type="number"
            min={1}
            max={100}
            onChange={(e) => handleColumnsChange(e.target.value)}
          />
        </div>
      </form>
      <div
        style={{
          width: "100%",
          maxWidth: 410,
          maxHeight: 820,
          overflow: "scroll",
        }}>
        <div style={{ width: columns * 40 }}>
          {Array.from({ length: rows }).map((r, row) => (
            <div key={row} style={{ display: "flex" }}>
              {Array.from({ length: columns }).map((c, column) => (
                <Cell key={column} row={row} column={column} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppGrid;
