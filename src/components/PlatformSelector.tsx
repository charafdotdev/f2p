// PlatformSelector.tsx
import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  FormLabel,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../interfaces/Platform';

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { platforms } = usePlatforms();

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
          variant="outline"
          textAlign="left"
        >
          {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {/* "All Platforms" option */}
          <MenuItem onClick={() => onSelectPlatform(null)}>
            All Platforms
          </MenuItem>
          {platforms.map((platform) => (
            <MenuItem
              key={platform.slug}
              onClick={() => {
                onSelectPlatform(platform);
              }}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
