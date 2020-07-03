import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Social from './components/Social';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #7777',
        color: '#111111',
        opacity: 1,
        padding: 20,
        marginTop: 40,
        justifyContent: 'center'
    }
})
const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Container>
                    <Grid container alignItems='center' spacing={2}>
                        <Grid item xs={12} md={5}>
                        © {new Date().getFullYear()}, {' '} Bryce Campbell
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Navbar />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Social />
                        </Grid>
                    </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

