import { useState, useMemo } from "react";
import { useCombobox } from "../hooks/useCombobox";
import { useForceRerender } from "../hooks/useForceRerender";
import { getItems } from "../utils/filterCities";
import { Menu } from "../components/Menu";

function ExpensiveFunction() {
  const forceRerender = useForceRerender();
  const [inputValue, setInputValue] = useState("");

  const allItems = useMemo(() => getItems(inputValue), [inputValue]);
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

export { ExpensiveFunction };
