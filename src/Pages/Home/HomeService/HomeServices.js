import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeService from './HomeService';


const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setHomeServices(data));
    }, [])
    const homeService = homeServices.slice(0, 6);
    return (
        <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Container>
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