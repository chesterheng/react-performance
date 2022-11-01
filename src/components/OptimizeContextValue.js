import { useForceRerender } from "../hooks/useForceRerender";
import { AppProvider } from "../context/AppContext";
import { DogProvider } from "../context/DogContext";
import DogNameInput from "../components/DogNameInput";
import Grid from "../components/Grid";

function OptimizeContextValue() {
  const forceRerender = useForceRerender();
  return (
    <div className="grid-app">
      <button onClick={forceRerender}>force rerender</button>
      <div>
        <DogProvider>
          <DogNameInput />
        </DogProvider>
        <AppProvider>
          <Grid />
        </AppProvider>
      </div>
    </div>
  );
}

export { OptimizeContextValue };
