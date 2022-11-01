function updateGridState(grid) {
  return grid.map((row) => {
    return row.map((cell) =>
      Math.random() > 0.7 ? Math.random() * 100 : cell
    );
  });
}

function updateGridCellState(grid, { row, column }) {
  return grid.map((cells, rI) => {
    if (rI === row) {
      return cells.map((cell, cI) => {
        if (cI === column) {
          return Math.random() * 100;
        }
        return cell;
      });
    }
    return cells;
  });
}

export { updateGridState, updateGridCellState };
