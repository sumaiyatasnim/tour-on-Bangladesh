import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import loginPic from "../Images/loginPic.jpg"
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert("Your password did not match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)

        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name='name'
                            onChange={handleOnChange}
                            type='text'
                            label="Your Name"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name='email'
                            onChange={handleOnChange}
                            type='email'
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            name='password'
                            onChange={handleOnChange}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            name='confirmPassword'
                            onChange={handleOnChange}
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button type='submit' variant='contained' sx={{ width: '75%', m: 2 }}>
                            Register
                        </Button>
                        <NavLink
                            to="/login"
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="text">Already registered?Please Login</Button>
                        </NavLink>
                    </form>

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginPic} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;