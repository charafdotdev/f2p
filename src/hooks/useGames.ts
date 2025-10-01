import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { Genre } from '../interfaces/Genre';

// Internal Game type
export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: Platform[];
  release_date: string;
  genre: string; // Make sure this is here
}

export interface Platform {
  slug: string;
  name: string;
}

interface ApiGame {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  release_date: string;
  genre: string;
}

const useGames = (selectedGenre: Genre | null) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<ApiGame[]>('/games', { signal: controller.signal })
      .then((res) => {
        // Transform API games to our format
        const processedGames = res.data.map((apiGame) => {
          const platformStrings = apiGame.platform
            .split(', ')
            .map((p) => p.trim());

          const platforms: Platform[] = platformStrings.map((p) => {
            let slug: string;
            let name: string;

            if (p.includes('PC') || p.includes('Windows')) {
              slug = 'pc';
              name = 'PC';
            } else if (p.includes('Web') || p.includes('Browser')) {
              slug = 'web';
              name = 'Web';
            } else {
              slug = 'pc';
              name = p;
            }

            return { slug, name };
          });

          return {
            ...apiGame,
            platform: platforms,
          };
        });

        // Filter only if selectedGenre exists
        const filteredGames = selectedGenre
          ? processedGames.filter(
              (game) =>
                game.genre.toLowerCase() === selectedGenre.name.toLowerCase()
            )
          : processedGames;

        setGames(filteredGames);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre]); // Dependency added!

  return { games, error, isLoading };
};

export default useGames;
