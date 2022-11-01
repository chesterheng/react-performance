import { CodeSplit } from "./components/CodeSplit";
import { ExpensiveFunction } from "./components/ExpensiveFunction";
import { ExpensiveFunctionWithWebWorker } from "./components/ExpensiveFunctionWithWebWorker";
import { MemorizedComponent } from "./components/MemorizedComponent";
import { LargeListsWithReactVirtual } from "./components/LargeListsWithReactVirtual";
import "./App.css";

function App() {
  return (
    <>
      <LargeListsWithReactVirtual />
    </>
  );
}

export default App;
