import React from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import { Mail, Twitter, LinkedIn, GitHub } from '@material-ui/icons';

const socialList = [
    {
        name: 'Email',
        icon: <Mail/>,
        tooltip: 'Click to send me an email'
    },
    {
        name: 'Twitter',
        icon: <Twitter />,
        tooltip: 'Follow me on Twitter'
    },
    {
        name: 'LinkedIn',
        icon: <LinkedIn />,
        tooltip: 'Connect with me on LinkedIn'
    },
    {
        name: 'GitHub',
        icon: <GitHub />,
        tooltip: 'Check out my repositories'
    },
]

const Social = () => {
    return (
        <Grid container alignItems='center' spacing={2}>
            {socialList.map(({ name, icon, tooltip }) => (
                <Grid key={name} item xs>
                    <Tooltip title={tooltip}>
                        {icon}
                    </Tooltip>
                </Grid>
            ))}
        </Grid>
    )
};

export default Social;