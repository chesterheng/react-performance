import { useState, useEffect } from "react";
import { useCombobox } from "../hooks/useCombobox";
import { useForceRerender } from "../hooks/useForceRerender";
import { useAsync, STATUS } from "../hooks/useAsync";
import { getItems } from "../utils/workerizedFilterCities";
import { Menu } from "./Menu";

function ExpensiveFunctionWithWebWorker() {
  const forceRerender = useForceRerender();
  const [inputValue, setInputValue] = useState("");
  const { data: allItems, run } = useAsync({
    data: [],
    status: STATUS.PENDING,
  });

  useEffect(() => {
    run(getItems(inputValue));
  }, [inputValue, run]);
  const items = allItems.slice(0, 100);

  const {
    selectedItem,
    highlightedIndex,
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    selectItem,
  } = useCombobox({
    items,
    inputValue,
    onInputValueChange: ({ inputValue: newValue }) => setInputValue(newValue),
    onSelectedItemChange: ({ selectedItem }) =>
      alert(
        selectedItem ? `You selected ${selectedItem.name}` : "Selection Cleared"
      ),
    itemToString: (item) => (item ? item.name : ""),
  });

  return (
    <div className="city-app">
      <button onClick={forceRerender}>force rerender</button>
      <div>
        <label {...getLabelProps()}>Find a city</label>
        <div {...getComboboxProps()}>
          <input {...getInputProps({ type: "text" })} />
          <button onClick={() => selectItem(null)} aria-label="toggle menu">
            &#10005;
          </button>
        </div>
        <Menu
          items={items}
          getMenuProps={getMenuProps}
          getItemProps={getItemProps}
          highlightedIndex={highlightedIndex}
          selectedItem={selectedItem}
        />
      </div>
    </div>
  );
}

export { ExpensiveFunctionWithWebWorker };
