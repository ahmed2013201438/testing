import React from 'react';
import { Popover, Button, Typography, makeStyles } from '@material-ui/core';
import SimplePopover from './components/Povoer';
import './App.css';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function App() {
  return (
    <SimplePopover />
  );
}

export default App;
