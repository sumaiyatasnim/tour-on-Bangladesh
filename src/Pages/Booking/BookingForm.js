// import { Box, Button, Container, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import useAuth from '../../Hooks/useAuth';

// const BookingForm = ({ service }) => {
//     // const { name } = service;
//     const { user } = useAuth();

//     const { register, handleSubmit, reset, formState: { errors } } = useForm();

//     const initialInfo = { name: user.displayName, email: user.email, phone: '' }
//     const [bookingInfo, setBookingInfo] = useState(initialInfo);

//     // const handleOnBlur = e => {
//     //     const field = e.target.name;
//     //     const value = e.target.value;
//     //     const newInfo = { ...bookingInfo };
//     //     newInfo[field] = value;
//     //     setBookingInfo(newInfo);
//     // }


//     // const handleBookingSubmit = (e) => {
//     //     const booking = {
//     //         ...bookingInfo,
//     //     }
//     //     // send data to server
//     //     fetch('https://rocky-waters-74855.herokuapp.com/bookings', {
//     //         method: 'POST',
//     //         headers: {
//     //             'content-type': '/booking/json'
//     //         },
//     //         body: JSON.stringify(booking)
//     //     })
//     //         .then(res => res.json())

//     //     alert('submitting');
//     //     e.preventDefault();
//     // }

//     const onSubmit = data => {
//         const myOrder = bookingInfo;
//         data.order = myOrder;
//         data.email = user.email;
//         console.log('my order', myOrder)
//         fetch('https://rocky-waters-74855.herokuapp.com/myOrders', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 if (result.insertedId) {
//                     alert('You have booked the package');

//                     reset();
//                     console.log(result);
//                 }

//             })
//     }
//     return (
//         <Container sx={{ display: 'flex', justifyContent: 'center' }}>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextField sx={{ m: 1, width: '100%', }}
//                     defaultValue={user.displayName}
//                     {...register("name")} required
//                     label="Name"
//                     name='name'
//                     id="standard-basic"
//                     variant='standard'
//                 />
//                 <br />
//                 <TextField sx={{ m: 1, width: '100%', }}
//                     defaultValue={user.email}
//                     {...register("email")} required
//                     label="Email"
//                     name='email'
//                     id="standard-basic"
//                     variant='standard'
//                 />
//                 <br />
//                 <TextField sx={{ m: 1, width: '100%', }}
//                     {...register("phone")}
//                     label="Phone Number"
//                     name='phone'
//                     type="number"
//                     id="standard-basic"
//                     variant='standard'
//                 />
//                 <br />

//                 <br />
//                 <Button type='submit' variant='contained' sx={{ m: 1 }}>Submit</Button>
//             </form>
//         </Container>
//     );
// };

// export default BookingForm;

import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Shared/Header';

const BookingForm = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`https://rocky-waters-74855.herokuapp.com/allProducts/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const onSubmit = data => {
        const myOrder = product;
        data.order = myOrder;
        data.email = user.email;
        console.log('my order', myOrder)
        fetch('https://rocky-waters-74855.herokuapp.com/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('You have booked the package');

                    reset();
                    console.log(result);
                }

            })
    }
    return (
        <>
            <Header></Header>
            <Container>

                <Grid
                    sx={{ mt: 4 }}
                    container
                    spacing={4}
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={12} sm={12} md={6} >
                        <img src={product.img} alt="place" style={{ maxWidth: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} >
                        <Typography variant="h5" className="color-b">{product.name}</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>About destination</Typography>
                        <Typography paragraph>{product.description}</Typography>
                        <Typography variant="h6" className="color-b">Price: {product.price}</Typography>

                    </Grid>
                </Grid>
                <Box sx={{ mt: 4 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center', color: "blue" }} >Please provide these informations</Typography>
                        <TextField {...register("name")} label="name" variant="standard" value={user.displayName} style={{ width: '100%' }} />
                        <br />
                        <br />
                        <TextField {...register("email")} label="email" variant="standard" value={user.email} style={{ width: '100%' }} />
                        <br />

                        <TextField {...register("phone")} label=" phone" required type="tel" variant="standard" style={{ width: '100%' }} />
                        <br />

                        <br />
                        <TextField {...register("address")} label="address" required variant="standard" style={{ width: '100%' }} />
                        <br /><br />
                        <Button type="submit" variant='contained' sx={{ color: 'white' }}>Add package</Button>
                    </form>
                </Box>
            </Container>\
        </>
    );
};

export default BookingForm;