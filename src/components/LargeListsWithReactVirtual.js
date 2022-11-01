import { useState, useEffect, useRef, useCallback } from "react";
import { useVirtual } from "react-virtual";
import { useCombobox } from "../hooks/useCombobox";
import { getItems } from "../utils/workerizedFilterCities";
import { useAsync, STATUS } from "../hooks/useAsync";
import { useForceRerender } from "../hooks/useForceRerender";
import { MenuWithReactVirtual as Menu } from "../components/MenuWithReactVirtual";

function LargeListsWithReactVirtual() {
  const forceRerender = useForceRerender();
  const [inputValue, setInputValue] = useState("");

  const { data: items, run } = useAsync({ data: [], status: STATUS.PENDING });
  useEffect(() => {
    run(getItems(inputValue));
  }, [inputValue, run]);

  const listRef = useRef();

  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    estimateSize: useCallback(() => 20, []),
    overscan: 10,
  });

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
    scrollIntoView: () => {},
    onHighlightedIndexChange: ({ highlightedIndex }) =>
      highlightedIndex !== -1 && rowVirtualizer.scrollToIndex(highlightedIndex),
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
          listRef={listRef}
          virtualRows={rowVirtualizer.virtualItems}
          totalHeight={rowVirtualizer.totalSize}
        />
      </div>
    </div>
  );
}

export { LargeListsWithReactVirtual };
