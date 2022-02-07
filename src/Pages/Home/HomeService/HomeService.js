import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const HomeService = (props) => {
    const { _id, name, price, description, img } = props.service;
    return (
        <Grid item xs={12} sm={4} md={4} >
            <Card sx={{ minWidth: 275, height: '100%' }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={img}

                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2">
                        Price: ${price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/booking/${_id}`}><Button variant='contained' size="small">See details</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default HomeService;