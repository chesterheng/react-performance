import { useForceRerender } from "../hooks/useForceRerender";
import { AppProvider } from "../context/AppContext";
import DogNameInput from "../components/DogNameInput";
import Grid from "../components/Grid";

function OptimizeContextValue() {
  const forceRerender = useForceRerender();
  return (
    <div className="grid-app">
      <button onClick={forceRerender}>force rerender</button>
      <AppProvider>
        <div>
          <DogNameInput />
          <Grid />
        </div>
      </AppProvider>
    </div>
  );
}

export { OptimizeContextValue };
