import React from 'react';
import { Badge, HStack } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li
          key={genre.id}
          fontSize="md"
          variant="subtle"
          colorScheme="green"
          px={2}
          py={1}
          borderRadius="full"
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
