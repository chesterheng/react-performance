import { CodeSplit } from "./components/CodeSplit";
import { ExpensiveFunction } from "./components/ExpensiveFunction";
import { ExpensiveFunctionWithWebWorker } from "./components/ExpensiveFunctionWithWebWorker";
import "./App.css";

function App() {
  return (
    <>
      <ExpensiveFunctionWithWebWorker />
    </>
  );
}

export default App;
