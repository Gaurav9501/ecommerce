import { FacebookOutlined, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <Box display="flex" justifyContent="space-around" bgcolor="#1B4B66" >
          <Box marginTop="40px">
            <Typography color="white">Shope by Category</Typography>
            <ul style={{listStyleType:"none"}} >
                <li style={{marginTop:"20px"}} ><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Skincare</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>PersonalCare</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>HandBags</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Apparels</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Watches</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Eye Wear</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Jewellery</Link></li>
            </ul>
          </Box>    
          <Box marginTop="40px">
              <Typography color="white" marginLeft="50px">About</Typography>
              <ul style={{listStyleType:"none"}} >
                <li style={{marginTop:"20px"}} ><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Contact Us</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>About Us</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Careers</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Press</Link></li>
            </ul>
           </Box>
          <Box marginTop="40px">
          <Typography color="white" marginLeft="50px">Policy</Typography>
              <ul style={{listStyleType:"none"}} >
                <li style={{marginTop:"20px"}} ><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Return Policy</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Terms of Use</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Sitemap</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Security</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>Privacy</Link></li>
                <li style={{marginTop:"20px"}}><Link to="#" style={{textDecoration: 'none', color:"lightgray"}}>CPR Compiliance</Link></li>

           </ul>
          </Box>

          <Box marginTop="40px" display="flex" >
              <Stack direction="row">
                  <Link to="#" style={{color:"black"}}><FacebookOutlined sx={{width:"40px", height:"40px"}} /></Link>
                <Link to="#" style={{color:"black"}}><Instagram sx={{width:"40px", height:"40px"}} /></Link>  
                <Link to="#" style={{color:"black"}}> <Twitter sx={{width:"40px", height:"40px"}} /></Link> 
                <Link to="#" style={{color:"black"}}> <YouTube sx={{width:"40px", height:"40px"}} /></Link>
              </Stack>
          </Box>
      </Box>
  )
}

export default Footer