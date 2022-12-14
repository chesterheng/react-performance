import { matchSorter } from "match-sorter";
import cities from "../data/us-cities.json";

const allItems = cities.map((city, index) => ({
  ...city,
  id: String(index),
}));

// for some reason workerize doesn't like export {getItems}
// but it's fine with inline exports like this so that's what we're doing.
export function getItems(filter) {
  if (!filter) {
    return allItems;
  }
  return matchSorter(allItems, filter, {
    keys: ["name"],
  });
}

// Measure JavaScript Execution Time
// console.time('Execution Time');
// functionToBeMeasured();
// console.timeEnd('Execution Time');

// This is to avoid some issues https://github.com/kentcdodds/react-performance/issues/115
export default class makeFilterCitiesWorker {}
