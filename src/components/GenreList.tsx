// src/components/GenreList.tsx
import React from 'react';
import { VStack, Badge } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

// 🔽 Import only Lucide icons
import {
  Swords,
  Target,
  Zap,
  Drama,
  MapPin,
  Brain,
  Castle,
  Rocket,
  Crown,
  Car,
  Hand,
  Users,
  Trophy,
} from 'lucide-react';

const GenreList = () => {
  const { genres } = useGenres();

  // 🔽 iconMap: maps genre slug → Lucide icon component
  const iconMap: { [key: string]: any } = {
    mmorpg: Swords,
    shooter: Target,
    moba: Zap,
    anime: Drama,
    'battle-royale': MapPin,
    strategy: Brain,
    fantasy: Castle,
    'sci-fi': Rocket,
    'card-games': Crown,
    racing: Car,
    fighting: Hand,
    social: Users,
    sports: Trophy,
  };

  return (
    <VStack wrap="wrap" spacing={3} mb={4}>
      {genres.map((genre) => {
        const IconComponent = iconMap[genre.slug];

        return (
          <Badge
            key={genre.id}
            display="flex"
            alignItems="center"
            gap={1}
            fontSize="md"
            variant="subtle"
            colorScheme="purple"
            px={2}
            py={1}
            borderRadius="full"
          >
            {IconComponent && <IconComponent size={14} strokeWidth={1.5} />}
            {genre.name}
          </Badge>
        );
      })}
    </VStack>
  );
};

export default GenreList;
