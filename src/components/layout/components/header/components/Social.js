import React from 'react';
import { Link } from 'gatsby';
import { Grid, Tooltip } from '@material-ui/core';
import { Mail, Twitter, LinkedIn, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: '#fff'
    }
});

const socialList = [
    {
        name: 'Email',
        icon: <Mail />,
        tooltip: 'Click to send me an email',
        href: '#'
    },
    {
        name: 'Twitter',
        icon: <Twitter />,
        tooltip: 'Follow me on Twitter',
        href: 'https://twitter.com/BryceACampbell'
    },
    {
        name: 'LinkedIn',
        icon: <LinkedIn />,
        tooltip: 'Connect with me on LinkedIn',
        href: 'https://linkedin.com/in/bryceacampbell7'
    },
    {
        name: 'GitHub',
        icon: <GitHub />,
        tooltip: 'Check out my repositories',
        href: 'https://github.com/Bryceacampbell'
    },
];

const Social = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            {socialList.map(({ name, icon, tooltip, href }) => (
                <Grid key={name} item xs>
                    <Link href={href} target='_blank' className={classes.link}>
                        <Tooltip title={tooltip}>
                            {icon}
                        </Tooltip>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
};

export default Social;