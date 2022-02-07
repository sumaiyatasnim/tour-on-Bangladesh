import { Grid4x4Outlined } from '@mui/icons-material';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

const Booking = () => {
    const { bookingId } = useParams();
    const [singleService, setSingleService] = useState([]);
    const { name, price, description, img } = singleService;

    useEffect(() => {
        fetch(`http://localhost:5000/allProducts/${bookingId}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, []);
    return (
        <>
            <Grid
                sx={{ mt: 4 }}
                container
                spacing={4}
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12} sm={12} md={6} >
                    <img src={img} alt="place" style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Typography variant="h5" className="color-b">{name}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>About destination</Typography>
                    <Typography paragraph>{description}</Typography>
                    <Typography variant="h6" className="color-b">Price: {price}</Typography>

                </Grid>
            </Grid>
            <BookingForm></BookingForm>
        </>
    );
};

export default Booking;

