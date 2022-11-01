import { Profiler } from "react";
import reportProfile from "../services/reportProfile";
import Counter from "../components/Counter";

function PerformanceMonitor() {
  return (
    <div>
      <Profiler id="counter" onRender={reportProfile}>
        <div>
          Profiled counter
          <Counter />
        </div>
      </Profiler>
      <div>
        Unprofiled counter
        <Counter />
      </div>
    </div>
  );
}

export { PerformanceMonitor };
