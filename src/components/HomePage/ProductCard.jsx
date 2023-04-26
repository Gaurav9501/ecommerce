import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

const ProductCard = ({ product }) => {

  const navigate = useNavigate();
 const handleNavigate = ()=>{
   console.log("clicked")
  navigate("/productDetails", {state:{product} })
 }
  return (
    <Box >
      <Card sx={{ width: "250px", height: "350px",cursor:"pointer"}} onClick={handleNavigate} >

        <button  style={{ border: "none", cursor: "pointer" }}  >
          <img style={{ width: "220px", height: "220px" }} src={product.imageURL} alt="#" />
        </button>
        <Typography variant="h6" >{product.name}</Typography>
        {/* <Typography variant="h6" sx={{color:"lightgray"}}>{category}</Typography> */}
        <Typography variant="h6">{product.price}</Typography>
      </Card>
    </Box>
  )
}

export default ProductCard