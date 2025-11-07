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
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: 'relevance',
    searchText: '',
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
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
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(value) =>
                setGameQuery({ ...gameQuery, sortOrder: value })
              }
            />
          </HStack>
        </Box>

        {/* GameGrid */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
