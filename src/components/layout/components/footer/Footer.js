import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../header/components/Navbar';
import Social from '../header/components/Social';

const useStyles = makeStyles({
    root: {
        background: '#7777',
        opacity: 1,
        height: 75,
        marginTop: 40
    }
})
const Footer = () => {
    const classes = useStyles();

    return (
        <footer>
            <Container maxWidth='xl' className={classes.root}>
                <Container>
                    <Grid container alignItems='center' spacing={2}>
                        <Grid item xs>
                        © {new Date().getFullYear()}, {' '} Bryce Campbell
                        </Grid>
                        <Grid item xs>
                            <Navbar />
                        </Grid>
                        <Grid item xs>
                            <Social />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </footer>
    )
};

export default Footer;