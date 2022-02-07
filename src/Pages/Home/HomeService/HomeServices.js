import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeService from './HomeService';


const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect(() => {
        fetch('https://rocky-waters-74855.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setHomeServices(data));
    }, [])
    const homeService = homeServices.slice(0, 6);
    return (
        <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Container>
                <Typography sx={{ mb: 4, color: "blue", textAlign: "center" }} variant='h4'>Destinations</Typography>
                <Grid container spacing={{ xs: 2, md: 7 }} columns={{ xs: 12, sm: 8, md: 12 }}>
                    {
                        homeService.map(service => <HomeService
                            service={service}
                        ></HomeService>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeServices;