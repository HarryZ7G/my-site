import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Backdrop from '@material-ui/core/Backdrop'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  appBar: {
    color: '#000000',
    background: '#FFFFFF22',
    backdropFilter: 'blur(10px)',
  },
  name: {
    flexGrow: 1
  },
}));

function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar} elevation='0'>
      <Toolbar>
        <Typography variant='h5' className={classes.name}>
          Wooferson
        </Typography>
        <Button color="default" className={classes.button}>
          About me
        </Button>
        <Button color="default" className={classes.button}>
          Lasagna
        </Button>
        <Button color="default" className={classes.button}>
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;