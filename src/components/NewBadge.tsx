import React from 'react';
import { Badge } from '@chakra-ui/react';

interface Props {
  isGameNew: boolean;
}

const NewBadge = ({ isGameNew }: Props) => {
  return isGameNew ? (
    <Badge colorScheme="green" fontSize="14px" paddingX="2" borderRadius="4px">
      NEW
    </Badge>
  ) : null;
};

export default NewBadge;
