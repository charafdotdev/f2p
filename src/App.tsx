// src/App.tsx
import { Grid, GridItem, Show, Box, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './interfaces/Genre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './interfaces/Platform';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // aside = sidebar, main = games + platform dropdown
      }}
      // Navbar height issues on single games genres
      //height="100vh"
      templateColumns={{
        lg: '200px 1fr', // Sidebar fixed width, main takes rest
      }}
    >
      {/* Navbar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Sidebar: GenreList only */}
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      {/* Main: PlatformSelector + GameGrid */}
      <GridItem area="main">
        {/* Platform Dropdown - shown everywhere */}
        <Box paddingX={{ base: 4, md: 10 }} marginTop={5}>
          <HStack spacing={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector />
          </HStack>
        </Box>

        {/* GameGrid */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
