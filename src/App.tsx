import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Main from 'src/main/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6">HealthyMynd</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Main></Main>
    </div>
  );
}

export default App;
