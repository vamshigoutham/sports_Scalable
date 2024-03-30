import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, useLocation } from 'react-router-dom';

const pages = ['Sports Venue Finder', 'Recommender', 'Workshop'];

function ResponsiveAppBar() {
    const location = useLocation();
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const tokenValue = localStorage.getItem('token');
        console.log('tokenValue', tokenValue);
        setToken(tokenValue);
    }, [location])

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" className=''>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {token ?
                                <>
                                    <NavLink to='/'><MenuItem>Home</MenuItem></NavLink>
                                    <NavLink to='/location'><MenuItem>Sports Venue Finder</MenuItem></NavLink>
                                    <NavLink to='/recommender'><MenuItem>Sports Recommender</MenuItem></NavLink>
                                    <NavLink to='/workshop'><MenuItem>Workshop</MenuItem></NavLink>
                                    <NavLink to='/login'><MenuItem onClick={() => {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('user');
                                    }}>Logout</MenuItem></NavLink>
                                </>
                                :
                                <>
                                    <NavLink to='/'><MenuItem>Home</MenuItem></NavLink>
                                    <NavLink to='/login'><MenuItem>Login</MenuItem></NavLink>
                                    <NavLink to='/signup'><MenuItem>Register</MenuItem></NavLink>
                                </>
                            }
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {token ?
                            <>
                                <NavLink to='/'><MenuItem>Home</MenuItem></NavLink>
                                <NavLink to='/location'><MenuItem>Sports Venue Finder</MenuItem></NavLink>
                                <NavLink to='/recommender'><MenuItem>Sports Recommender</MenuItem></NavLink>
                                <NavLink to='/workshop'><MenuItem>Workshop</MenuItem></NavLink>
                                <NavLink to='/login'><MenuItem onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('user');
                                }}>Logout</MenuItem></NavLink>
                            </>
                            :
                            <>
                                <NavLink to='/'><MenuItem>Home</MenuItem></NavLink>
                                <NavLink to='/login'><MenuItem>Login</MenuItem></NavLink>
                                <NavLink to='/signup'><MenuItem>Register</MenuItem></NavLink>
                            </>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;