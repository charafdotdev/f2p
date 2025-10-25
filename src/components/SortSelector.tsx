import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { sortOptions } from '../utils/sortOptions';

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (value: string) => void;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  // getting the label name for current selection
  const getCurrentLabel = () => {
    return (
      sortOptions.find((opt) => opt.value === selectedSortOrder)?.label ||
      'Relevance'
    );
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
          variant="outline"
          textAlign="left"
        >
          Order by: {getCurrentLabel()}
        </MenuButton>
        <MenuList>
          {/* "All Platforms" option */}
          {sortOptions.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => onSelectSortOrder(option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
