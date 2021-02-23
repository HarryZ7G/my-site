import React from 'react'
import Fade from '@material-ui/core/Fade'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grow from '@material-ui/core/Zoom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from "framer-motion"
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#EEEEEE',
    direction: 'column',
    flexGrow: 1,
    justifyContent: 'center',
  },
  intro: {
    paddingTop: 500,
  },
  hello: {
    position: 'fixed',
    top: '500px',
  }
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <Grow in='true' timeout={1000}>
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item className={classes.intro}>
          <Fade in='true' timeout={1000} style={{ transitionDelay: '1s'}}>
            <Typography variant='h1'>
              Hello
            </Typography>
          </Fade>
          <div className='box' style={{display: 'flex', justifyContent: 'center'}}>
            <motion.div
            animate={{
              height: [0, 100]
            }}
            transition={{
              delay: 1.7,
              duration: 1,
              ease: "easeInOut",
              times: [0, 1],
            }}>
              <Fade in='true' timeout={1000} style={{ transitionDelay: '3s'}}>
                <Typography variant='h2' align='center'>
                  Welcome to my website
                </Typography>
              </Fade>
            </motion.div>
          </div>
          <div className='circle' style={{display: 'flex', justifyContent: 'center'}}>
            <motion.div
              animate={{
                scale: [0, 20]
              }}
              transition={{
                delay: 5,
                duration: 0.8,
                times: [0, 1],
              }}/>
          </div>
        </Grid>
      </Grid>
    </Grow>
  );
}

export default LandingPage;