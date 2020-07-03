import React from 'react';
import Slide from 'react-reveal/Slide'
import { Container, Grid, Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';
import testImage from '../../images/when-coding-is-criminal.jpg';
import { makeStyles } from '@material-ui/core/styles';

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
    },
    {
        id: 4,
        name: 'Third Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    },
    {
        id: 5,
        name: 'Third Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    },
    {
        id: 6,
        name: 'Third Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    },
    {
        id: 7,
        name: 'Third Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    },
    {
        id: 8,
        name: 'Third Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    },
    {
        id: 9,
        name: 'Third Project',
        thumbnail: testImage,
        project_type: 'Web Development'
    }
];

const useStyles = makeStyles({
    root: {
        paddingTop: 40,
        paddingBottom: 40
    },
    image: {
        height: 250
    }
})

const Gallery = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={4}>
                {testList.map(({ id, name, thumbnail, project_type }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Slide bottom>
                            <Card>
                                <CardActionArea>
                                    <CardMedia image={thumbnail} className={classes.image} />
                                </CardActionArea>
                                <CardContent>
                                    <Typography variant='h6'>{name}</Typography>
                                    <Typography variant='subtitle1'>{project_type}</Typography>
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
};

export default Gallery;