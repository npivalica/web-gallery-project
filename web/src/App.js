import React from 'react';
import { ThemeProvider } from '@chakra-ui/react';

import AppContainer from './app.container';

function App() {
  return (
    <div>
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
