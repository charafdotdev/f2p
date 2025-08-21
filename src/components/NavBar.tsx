import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import React from 'react';
import ColoroModeSwitch from './ColoroModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" margin="10px">
      <Image src={logo} boxSize="60px" />
      <ColoroModeSwitch />
    </HStack>
  );
};

export default NavBar;
