import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
      <>
      <Box width="100%"  bgcolor="lightgray" display="flex">
          <Typography p='10px' m='0 auto' variant='span'>We are currentyly experiencing local customer clearence delays. For the latest updates please check your order status here...</Typography>
      </Box>
      
      </>
  )
}

export default Banner