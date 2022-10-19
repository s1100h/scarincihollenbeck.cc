import { DropDownItemSelector, DropdownSelectorBtn } from 'styles/Filters.style';

const FilterSelector = ({
  selectionList, onSelect, title, nameItem,
}) => (
  <DropdownSelectorBtn variant="link" title={title}>
    {selectionList
      && selectionList.map((selectedItem) => (
        <DropDownItemSelector
          key={selectedItem.ID}
          value={selectedItem.title}
          name={nameItem}
          onClick={(e) => onSelect(e, selectedItem.title)}
        >
          {selectedItem.title}
        </DropDownItemSelector>
      ))}
  </DropdownSelectorBtn>
);

export default FilterSelector;
