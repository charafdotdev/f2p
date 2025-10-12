// src/App.tsx
import { Grid, GridItem, Show, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './interfaces/Genre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './interfaces/Platform';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // aside = sidebar, main = games + platform dropdown
      }}
      height="100vh"
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
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          />
        </GridItem>
      </Show>

      {/* Main: PlatformSelector + GameGrid */}
      <GridItem area="main">
        {/* Platform Dropdown - shown everywhere */}
        <Box paddingX={{ base: 4, md: 10 }} marginTop={5}>
          <PlatformSelector onSelectPlatform={setSelectedPlatform} />
        </Box>

        {/* GameGrid */}
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
