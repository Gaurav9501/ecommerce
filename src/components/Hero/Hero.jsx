import { Box } from '@mui/material'
import React from 'react'

const Hero = () => {
  const back = "https://w0.peakpx.com/wallpaper/155/60/HD-wallpaper-marion-cotillard-dress-rose-purse-black-woman-girl-dior-actress-flower-pink.jpg"
  return (

    <Box display="flex" justifyContent="center" p='20px'
      style={{
        height: '400px',

        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "20px",
        margin: "20px"
      }}

    >

    </Box>



  )
}

export default Hero