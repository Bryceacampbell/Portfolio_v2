import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import testImage from '../../images/when-coding-is-criminal.jpg';
import Slide from 'react-reveal/Slide';

const testList = [
    {
        id: 1,
        name: 'Test Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    },
    {
        id: 2,
        name: 'Another Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    },
    {
        id: 3,
        name: 'Third Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    }
];

const useStyles = makeStyles({
    image: {
        height: 200
    }
})

const Featured = (props) => {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Featured Projects
                </Typography>
                </Grid>
                {testList.map(({ id, name, thumbnail, project_type }) => (
                    <Grid item xs={12} md={4} key={id}>
                        <Slide bottom>
                            <Card>
                                <CardActionArea>
                                    <CardMedia image={thumbnail} className={classes.image} />
                                </CardActionArea>
                                <CardContent>
                                    <Typography variant='h6'>{name}</Typography>
                                    <Typography variant='body'>{project_type}</Typography>
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
};

export default Featured;