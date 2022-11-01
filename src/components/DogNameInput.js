import { useDogState } from "../context/DogContext";
import { DOG_ACTIONS } from "../reducers/dogReducer";

function DogNameInput() {
  const [state, dispatch] = useDogState();
  const { dogName } = state;
  // const [dogName, setDogName] = useState("");

  function handleChange(event) {
    const newDogName = event.target.value;
    dispatch({ type: DOG_ACTIONS.TYPED_IN_DOG_INPUT, dogName: newDogName });
    // setDogName(newDogName);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="dogName">Dog Name</label>
      <input
        value={dogName}
        onChange={handleChange}
        id="dogName"
        placeholder="Toto"
      />
      {dogName ? (
        <div>
          <strong>{dogName}</strong>, I've a feeling we're not in Kansas anymore
        </div>
      ) : null}
    </form>
  );
}

export default DogNameInput;
