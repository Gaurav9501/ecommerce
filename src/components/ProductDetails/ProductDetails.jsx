import { Box, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router'
import Footer from '../Footer'
import Navbar from '../Navbar'

const ProductDetails = () => {
  // const {state} = useLocation(state)
  const {state } = useLocation();
  const product = state.product;
  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qwbe2YsCFAsXF8xx1JPqai2XaX7xiCPFCD1PbI3lEw&usqp=CAU&ec=48665698"
  console.log(product)
  return (
    <Box>
        {/* Navbar */}
        <Navbar />
        <Box display="flex">
          <img style={{width:"500px",height:"500px",broder:"solid 3px"}} src={url} alt="#" ></img>
          <Box ml="220px">
            <Typography fontWeight="bold" variant="h4">{product.name}</Typography>
            <Typography fontWeight="bold"  sx={{color:"gray"}} variant="h4">Leather handbag with leather strap</Typography>
            
            <Typography variant="h3">${product.price}</Typography>
            <Typography></Typography>
          </Box>
        {/* Product details */}
        </Box>
          {/* Extra product Details */}
        <Footer />
    </Box>
  )
}

export default ProductDetails