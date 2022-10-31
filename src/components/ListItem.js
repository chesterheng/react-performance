function ListItem({
  getItemProps,
  item,
  index,
  selectedItem,
  highlightedIndex,
  ...props
}) {
  const isSelected = selectedItem?.id === item.id;
  const isHighlighted = highlightedIndex === index;
  return (
    <li
      {...getItemProps({
        index,
        item,
        style: {
          fontWeight: isSelected ? "bold" : "normal",
          backgroundColor: isHighlighted ? "lightgray" : "inherit",
        },
        ...props,
      })}
    />
  );
}

export { ListItem };
