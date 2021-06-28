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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SimplePopover />
      <Button onClick={handleClick} variant="contained">click here</Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >

      </Popover>
      <Typography
          className={classes.typography}
      >
        The content of the Popover.
      </Typography>
    </>
  );
}

export default App;
