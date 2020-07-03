import { Link } from "gatsby"
import React from "react"
import { Grid, Container, Typography } from '@material-ui/core';
import Logo from '../../../../images/white_logo.png'
import Navbar from './components/Navbar';
import Social from "./components/Social";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '20px',
    justifyContent: 'center'
  },
  logo: {
    margin: 0
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Container>
        <Grid container alignItems='center' spacing={2}>
          <Grid item xs={12} sm={12} md={5}>
            <Link to={'/'}>
              <img src={Logo} alt="Bryce Campbell" className={classes.logo}/>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Navbar />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Social />
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header;
