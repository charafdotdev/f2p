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
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { platforms } = usePlatforms();

  return (
    <>
      <FormLabel>Platform</FormLabel>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
          variant="outline"
          textAlign="left"
        >
          Platforms
        </MenuButton>
        <MenuList>
          {/* "All Platforms" option */}
          <MenuItem onClick={() => onSelectPlatform(null)}>
            All Platforms
          </MenuItem>
          {platforms.map((platform) => (
            // <MenuItem
            //   key={platform.slug}
            //   onClick={() => onSelectPlatform(platform)}
            // >
            //   {platform.name}
            // </MenuItem>
            <MenuItem
              key={platform.slug}
              onClick={() => {
                console.log('Selected platform:', platform);
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
