import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

import LightSpeed from 'react-reveal/LightSpeed';

const Left = () => {
    return (
        <div>
            <LightSpeed left>
                <Typography variant='h2'>tech enthusiast</Typography>
                <Typography variant='h6'>tech enthusiast with a passion for all things tech</Typography>
            </LightSpeed>
        </div>
    );
};

const Right = () => {
    return (
        <div>
            <LightSpeed right>
    <Typography variant='h2'>{'<coder />'}</Typography>
    <Typography variant='h6'>Software Developer who focues on writing clean, elegant and efficient code</Typography>

            </LightSpeed>
        </div>
    );
};


const Hero = () => {
    return (
        <Container maxWidth='xl' disableGutters style={{ height: 600, marginBottom: 40 }}>
            <Container style={{paddingTop: 40}}>
                <Grid container spacing={2} >
                    <Grid item xs>
                        <Left />
                    </Grid>
                    <Grid item xs>
                        <Right />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
};

export default Hero;