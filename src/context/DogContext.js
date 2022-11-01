import { createContext, useReducer, useContext } from "react";
import { dogReducer } from "../reducers/dogReducer";

const DogContext = createContext();
DogContext.displayName = "DogContext";
const { Provider } = DogContext;

function DogProvider(props) {
  const [state, dispatch] = useReducer(dogReducer, { dogName: "" });
  const value = [state, dispatch];
  return <Provider value={value} {...props} />;
}

function useDogState() {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error("useDogState must be used within the DogStateProvider");
  }
  return context;
}

export { DogProvider, useDogState };
