import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'

const Handpicked = () => {
  return (
      <Box bgcolor="#1B4B66" height="450px" > 
        <Typography 
        variant='h5' 
        display="block" 
        color="white"
        p="20px"
        >Handpicked Collections</Typography>
        <Box display="flex" justifyContent="space-around">        
        <ProductCard imageURL="data:image/jpeg;base64,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"
                   name="Watches" 
                   width="250px"
                   height="250px"
                   cardDefaultWidth="250px"
                   cardDefaultHeight="250px"
                   rounded="true"
                   isCategory="true"
                   category="watch"
            />
      <ProductCard imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUjpxwj-0D0rCDknKdYn6fyuxyht7rXanr7uIrfaRpcuSfo-_t8TZAtB12RI50W9F49O89JFLGys&usqp=CAU&ec=48665698"
                   name="Suunglasses" 
                   width="250px"
                   height="250px"
                   cardDefaultWidth="250px"
                   cardDefaultHeight="250px"
                   rounded="true"
                   isCategory="true"
                   category="glasses"

            />
         <ProductCard imageURL="data:image/jpeg;base64,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"
                   name="Handbangs"
                   width="250px"
                   height="250px"
                   cardDefaultWidth="250px"
                   cardDefaultHeight="250px"
                   rounded="true"
                   isCategory="true"
                   category="bag"
            />
              <ProductCard imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGX8F3sPaHDCU3vQOt9ceN0lfSsUau9OxJMGNNq-o5wA&usqp=CAU&ec=48665698"
                   name="PersonalCare"
                   width="250px"
                   height="250px"
                   cardDefaultWidth="250px"
                   cardDefaultHeight="250px"
                   rounded="true"
                   isCategory="true"
                   category="perfume"
            />
            
            </Box>
      </Box>

  )
}

export default Handpicked