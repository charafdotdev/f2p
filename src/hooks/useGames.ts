import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

// Internal Game type
export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: Platform[]; // ← Now Platform[], not string[]
  release_date: string;
}

// Platform interface
export interface Platform {
  slug: string;
  name: string;
}

// API response shape
interface ApiGame {
  id: number;
  title: string;
  thumbnail: string;
  platform: string; // e.g., "PC (Windows), Web Browser"
  release_date: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<ApiGame[]>('/games', { signal: controller.signal })
      .then((res) => {
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
              slug = 'pc'; // fallback
              name = p;
            }

            return { slug, name };
          });

          return {
            ...apiGame,
            platform: platforms,
          };
        });

        setGames(processedGames);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
