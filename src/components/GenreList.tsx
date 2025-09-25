// src/components/GenreList.tsx
import React from 'react';
import { VStack, Badge, Button } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { Genre } from '../interfaces/Genre';

// 🔽 Import only Lucide icons
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
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { genres } = useGenres();

  const iconMap: { [key: string]: any } = {
    all: Grid3x3, // 🔲 All Games = overview
    action: Sword, // ⚔️ Action = sword
    arpg: Flame, // 🔥 ARPG = fiery combat
    'battle-royale': Users, // 👥 Battle Royale = many players
    'card-game': Crown,
    fantasy: Castle, // 🏰 Fantasy = castle
    fighting: Hand, // ✊ Fighting = fist
    mmo: Globe, // 🌐 MMO = massive world
    mmorpg: Swords, // ⚔️ MMORPG = crossed swords
    moba: Zap, // ⚡ MOBA = high-energy
    racing: Car, // 🚗 Racing = car
    shooter: Crosshair, // 🎯 Shooter = crosshair
    social: MessageCircle, // 💬 Social = chat/message
    sports: Trophy, // 🏆 Sports = trophy
    strategy: Brain, // 🧠 Strategy = brain
  };

  return (
    <VStack wrap="wrap" spacing={3} mb={4}>
      {genres.map((genre) => {
        const IconComponent = iconMap[genre.slug];

        return (
          <Button
            onClick={() => onSelectGenre(genre.id === 0 ? null : genre)}
            variant="link"
            key={genre.id}
            display="flex"
            alignItems="center"
            gap={1}
            fontSize="md"
            colorScheme="purple"
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
