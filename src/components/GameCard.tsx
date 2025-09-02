// GameCard.tsx
import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import NewBadge from './NewBadge';

interface Props {
  game: Game;
}
const sixMonthsInMs = 6 * 30.4 * 86400000;
const ninetyDaysInMs = 90 * 24 * 60 * 60 * 1000;

const GameCard = ({ game }: Props) => {
  const releaseTime = Date.parse(game.release_date);
  const now = Date.now();
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail} alt={game.title} />
      <CardBody>
        <Heading fontSize="2xl" mb={2}>
          {game.title}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.platform} />
          <NewBadge isGameNew={now - sixMonthsInMs < releaseTime} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
