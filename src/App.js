import { CodeSplit } from "./components/CodeSplit";
import { ExpensiveFunction } from "./components/ExpensiveFunction";
import { ExpensiveFunctionWithWebWorker } from "./components/ExpensiveFunctionWithWebWorker";
import { MemorizedComponent } from "./components/MemorizedComponent";
import { LargeListsWithReactVirtual } from "./components/LargeListsWithReactVirtual";
import { OptimizeContextValue } from "./components/OptimizeContextValue";

import "./App.css";

function App() {
  return (
    <>
      <OptimizeContextValue />
    </>
  );
}

export default App;
