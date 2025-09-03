import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ sm: '350px', md: '350px', lg: '300px', xl: '280px' }}
      borderRadius={10}
      overflow="hidden"
      boxShadow="md"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
