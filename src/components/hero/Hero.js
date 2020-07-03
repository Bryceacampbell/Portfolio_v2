import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

import LightSpeed from 'react-reveal/LightSpeed';

const Left = () => {
    return (
        <div>
            <LightSpeed left>
                <Typography variant='h2'>tech enthusiast </Typography>
                <Typography variant='h6'>tech enthusiast with a passion for all things tech</Typography>
            </LightSpeed>
        </div>
    );
};

const Right = () => {
    return (
        <div>
            <LightSpeed right>
                <Typography variant='h2'>{'<developer />'}</Typography>
                <Typography variant='h6'>software developer who focues on writing clean, elegant and efficient code</Typography>

            </LightSpeed>
        </div>
    );
};


const Hero = () => {
    return (
        <Container style={{ paddingTop: 40 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm>
                    <Left />
                </Grid>
                <Grid item sm={1} >

                </Grid>
                <Grid item xs={12} sm>
                    <Right />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Hero;