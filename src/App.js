import { CodeSplit } from "./components/CodeSplit";
import { ExpensiveFunction } from "./components/ExpensiveFunction";
import { ExpensiveFunctionWithWebWorker } from "./components/ExpensiveFunctionWithWebWorker";
import { MemorizedComponent } from "./components/MemorizedComponent";
import "./App.css";

function App() {
  return (
    <>
      <MemorizedComponent />
    </>
  );
}

export default App;
