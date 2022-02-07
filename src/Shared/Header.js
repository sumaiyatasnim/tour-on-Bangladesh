import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, } from '@mui/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from "../Images/tour_on_BD_logo.png"
import useAuth from '../Hooks/useAuth';



const Header = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyles = makeStyles({
        navBar: {
            backgroundColor: "white"

        },
        navItem: {
            color: "black",
            textDecoration: "none"
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important ',
                backgroundColor: 'black'
            },
        },
        menuItem: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important '
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                alignItem: 'right'
            },
            height: "100px",

        },
        mobileNavItem: {
            textDecoration: 'none',
            color: 'black'
        }
    })
    const { navItem, navIcon, menuItem, navLogo, mobileNavItem, navBar } = useStyles();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}

        >
            <List>
                <ListItem button >
                    <ListItemText><Link className={mobileNavItem} to='/'>Home</Link></ListItemText>
                </ListItem>
                <Divider></Divider>
                <ListItem button >
                    <ListItemText><Link className={mobileNavItem} to='/'>Service</Link></ListItemText>
                </ListItem>
                <Divider></Divider>
                <ListItem button >
                    <ListItemText><Link className={mobileNavItem} to='/contact'>Contact</Link></ListItemText>
                </ListItem>
                <Divider></Divider>
                <ListItem button >
                    <ListItemText><Link className={mobileNavItem} to='/login'>Login</Link></ListItemText>
                </ListItem>
                <Divider></Divider>
            </List>

        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className={navBar}>
                        <IconButton
                            size="large"
                            edge="start"

                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography> */}
                        <img className={navLogo} src={logo} alt="" />
                        <Box className={menuItem}>
                            <Link className={navItem} to="/"><Button color="inherit">Home</Button></Link>
                            <Link className={navItem} to="/myOrder"><Button color="inherit">MyOrder</Button></Link>
                            <Link className={navItem} to="/contact"><Button color="inherit">Contact </Button></Link>
                        </Box>
                        {
                            user?.email ?
                                <Button onClick={logout} className={navItem} >Logout</Button>
                                :
                                <Link className={navItem} to="/login"><Button >Login</Button></Link>}
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment >
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Header;