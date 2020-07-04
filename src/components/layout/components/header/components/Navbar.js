import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const pages = [
    {
        url: '/about',
        name: 'about'
    },
    {
        url: '/portfolio',
        name: 'portfolio'
    },
    {
        url: '/blog',
        name: 'blog'
    }
]

const useStyles = makeStyles({
    link: {
        color: '#fff',
        textDecoration: 'none'
    }
});

const Navbar = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            {pages.map(({ name, url }) => (
                <Grid key={name} item xs={4} >
                    <Link to={url} className={classes.link}>
                        <Typography variant='h5'>{name}</Typography>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
};

export default Navbar;
