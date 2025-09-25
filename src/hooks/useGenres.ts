import { Genre } from '../interfaces/Genre';

const useGenres = () => {
  const genres: Genre[] = [
    { id: 0, name: 'All Games', slug: 'all' },
    { id: 1, name: 'Action', slug: 'action' },
    { id: 2, name: 'ARPG', slug: 'arpg' },
    { id: 3, name: 'Battle Royale', slug: 'battle-royale' },
    { id: 4, name: 'Card Game', slug: 'card-game' },
    { id: 5, name: 'Fantasy', slug: 'fantasy' },
    { id: 6, name: 'Fighting', slug: 'fighting' },
    { id: 7, name: 'MMO', slug: 'mmo' },
    { id: 8, name: 'MMORPG', slug: 'mmorpg' },
    { id: 9, name: 'MOBA', slug: 'moba' },
    { id: 10, name: 'Racing', slug: 'racing' },
    { id: 11, name: 'Shooter', slug: 'shooter' },
    { id: 12, name: 'Social', slug: 'social' },
    { id: 13, name: 'Sports', slug: 'sports' },
    { id: 14, name: 'Strategy', slug: 'strategy' },
  ];

  return { genres };
};

export default useGenres;
