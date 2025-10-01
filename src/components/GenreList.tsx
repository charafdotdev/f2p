// src/components/GenreList.tsx
import React from 'react';
import { VStack, Badge, Button } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { Genre } from '../interfaces/Genre';

// Import only Lucide icons
import {
  Sword,
  Swords,
  Zap,
  Brain,
  Castle,
  Car,
  Crown,
  Hand,
  Users,
  Trophy,
  Grid3x3,
  Flame,
  Globe,
  MessageCircle,
  Crosshair,
} from 'lucide-react';

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres } = useGenres();

  const iconMap: { [key: string]: any } = {
    all: Grid3x3,
    action: Sword,
    arpg: Flame,
    'battle-royale': Users,
    'card-game': Crown,
    fantasy: Castle,
    fighting: Hand,
    mmo: Globe,
    mmorpg: Swords,
    moba: Zap,
    racing: Car,
    shooter: Crosshair,
    social: MessageCircle,
    sports: Trophy,
    strategy: Brain,
  };

  return (
    <VStack wrap="wrap" spacing={3} mb={4}>
      {genres.map((genre) => {
        const IconComponent = iconMap[genre.slug];

        return (
          <Button
            onClick={() => onSelectGenre(genre.id === 0 ? null : genre)}
            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
            variant="link"
            key={genre.id}
            display="flex"
            alignItems="center"
            gap={1}
            fontSize="md"
            colorScheme={genre.id === selectedGenre?.id ? 'purple' : 'white'}
            px={2}
            py={1}
            borderRadius="full"
          >
            {IconComponent && <IconComponent size={14} strokeWidth={1.5} />}
            {genre.name}
          </Button>
        );
      })}
    </VStack>
  );
};

export default GenreList;
