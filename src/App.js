import { CodeSplit } from "./components/CodeSplit";
import { ExpensiveFunction } from "./components/ExpensiveFunction";
import { ExpensiveFunctionWithWebWorker } from "./components/ExpensiveFunctionWithWebWorker";
import { MemorizedComponent } from "./components/MemorizedComponent";
import { LargeListsWithReactVirtual } from "./components/LargeListsWithReactVirtual";
import { OptimizeContextValue } from "./components/OptimizeContextValue";
import { PerformanceMonitor } from "./components/PerformanceMonitor";
import { UseCallbackDemo } from "./components/UseCallbackDemo";

import "./App.css";

function App() {
  return (
    <>
      <UseCallbackDemo />
    </>
  );
}

export default App;
