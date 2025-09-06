import { Genre } from '../interfaces/Genre';

const useGenres = () => {
  const genres: Genre[] = [
    { id: 1, name: 'MMORPG', slug: 'mmorpg' },
    { id: 2, name: 'Shooter', slug: 'shooter' },
    { id: 3, name: 'MOBA', slug: 'moba' },
    { id: 4, name: 'Anime', slug: 'action' },
    { id: 5, name: 'Battle Royale', slug: 'battle-royale' },
    { id: 6, name: 'Strategy', slug: 'strategy' },
    { id: 7, name: 'Fantasy', slug: 'fantasy' },
    { id: 8, name: 'Sci-Fi', slug: 'sci-fi' },
    { id: 9, name: 'Card Games', slug: 'card-games' },
    { id: 10, name: 'Racing', slug: 'racing' },
    { id: 11, name: 'Fighting', slug: 'fighting' },
    { id: 12, name: 'Social', slug: 'social' },
    { id: 13, name: 'Sports', slug: 'sports' },
  ];

  return { genres };
};

export default useGenres;
