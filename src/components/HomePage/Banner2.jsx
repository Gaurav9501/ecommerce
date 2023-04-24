import { Box, Grid } from '@mui/material'
import React from 'react'

const Banner2 = ({image1,image2,image3}) => {
  return (
      <Box flex>
      <Grid container m="20px">
        <Grid ml="250px" mb="20px" item xs={8}>
            <Box height="450px"  >
                <img style={{height:"450px", width:"1260px",borderRadius:"20px"}} src={image3} alt="#"></img>
            </Box>
        </Grid>
        
        <Grid ml="250px" mr="20px" item xs={4}>
        <Box height="300px">
            <img style={{width:"580px",height:"300px",borderRadius:"20px"}} src={image2} alt="#"></img>
        </Box>
        </Grid>
        
        <Grid ml="10px" mr="20px" item xs={4}>
        <Box height="300px">
            <img style={{width:"630px",height:"300px",borderRadius:"20px"}} src={image1} alt="#"></img>
        </Box>
        </Grid>
        
      </Grid>
      </Box>
  )
}

export default Banner2