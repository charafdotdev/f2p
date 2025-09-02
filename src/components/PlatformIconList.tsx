// src/components/PlatformIconList.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FaWindows } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Tooltip } from '@chakra-ui/react';

// Define Platform interface
interface Platform {
  slug: string;
  name: string;
}

// Props for the component
interface Props {
  platforms: Platform[];
}

// Map platform slugs to icons
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  web: BsGlobe,
};

// Component that renders icons for platforms
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack>
      {platforms.map((platform) => (
        <Tooltip key={platform.slug} label={platform.name} hasArrow>
          <Icon
            boxSize="5"
            color="gray.500"
            key={platform.slug}
            as={iconMap[platform.slug]}
          />
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
