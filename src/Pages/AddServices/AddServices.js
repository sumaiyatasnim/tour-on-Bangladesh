import { Button, Container, TextareaAutosize, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://rocky-waters-74855.herokuapp.com/addProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <Container sx={{ display: "flex" }}>
            <Container>

                {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}> */}

                <form onSubmit={handleSubmit(onSubmit)} >
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        {...register("name")}
                        id="standard-basic"
                        label="Name"
                        name="name"

                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        {...register("description")}
                        id="standard-basic"
                        label="Description"
                        type="text"
                        name="description"

                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        {...register("price")}
                        id="standard-basic"
                        label="Price"
                        type="number"
                        name="price"

                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        {...register("img")}
                        id="standard-basic"
                        label="Image URL"
                        name="img"
                        variant="standard"
                    />


                    <Button
                        sx={{ width: "50%", m: 1 }}
                        type="submit"
                        variant="contained"
                    >
                        Add Travel Place
                    </Button>
                </form>
            </Container>
        </Container>
    );
};

export default AddServices;