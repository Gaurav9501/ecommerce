import { AppBar, Box, TextField, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import '../App.css'

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
                <Toolbar sx={{ gap: "30px" }}>
                    <Typography variant='h4' sx={{ color: "darkblue" }}>CORAL</Typography>
                    <Box display="flex" gap="40px">
                        <Link className='removeDecoration' to="#">Handbags</Link>
                        <Link className='removeDecoration' to="#">Watches</Link>
                        <Link className='removeDecoration' to="#">Skincare</Link>
                        <Link className='removeDecoration' to="#">Jewellery</Link>
                        <Link className='removeDecoration' to="#">Apperels</Link>

                        
                    </Box>

                    <Box display="flex" sx={{ border: "none", bgcolor: "lightgray", ml: "500px", width: '450px' }}>
                        <form style={{ display: "flex", border: 'none' }} >
                            <SearchIcon sx={{ height: "50px", justifyContent: "flex-end", cursor: 'pointer' }} />
                            <TextField placeholder='Search for Products or brands...'
                                sx={{
                                    backgroundColor: "lightgray",
                                    border: "none",
                                    width: '100%'
                                }} />
                        </form>
                    </Box>
                    <Box display="flex" gap="30px">
                        <FavoriteBorder sx={{ cursor: 'pointer', color: "black" }} onClick={() => { console.log("working") }} color='secondary' />
                        <PermIdentityIcon sx={{ cursor: 'pointer', color: "black" }} color='secondary' />
                        <LocalMallOutlinedIcon sx={{ cursor: 'pointer', color: "black" }} color='secondary' />
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Navbar