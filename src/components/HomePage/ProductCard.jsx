import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const ProductCard = (
    {imageURL,
        name,
        price,
        category="none",
        width="220px",
        height="220px",
        cardDefaultWidth ="250px",
        cardDefaultHeight="350px",
        rounded="false",
        isCategory
    }) => {

  
   const navigate = useNavigate();
  
   
   const handleCategory = ()=>{
      console.log("called category")
      navigate("/category",{state:{category}})
   }

   const handleNewArrival =()=>{
    console.log("called arrival")
   }
   
  return (
      <Box >
      <Card  sx={{
          width:cardDefaultWidth, 
          height:cardDefaultHeight,
          borderRadius: rounded!=='false' ?"20px":"0px"
          }}>

        {/* <Link  onClick={isCategory==="true"?handleCategory:handleNewArrival}>
        <img style={{width:width, height:height}}  src={imageURL} alt="#" />
          </Link>
           */}
         
            {/*  */}
            <button style={{border:"none",cursor:"pointer"}}  onClick={isCategory==="true"?handleCategory:handleNewArrival}>
        <img style={{width:width, height:height}}  src={imageURL} alt="#" />
          </button>
         
           {/*  */}   
          {name && (<Typography variant="h6" >{name}</Typography>)}
          {category && (<Typography variant="h6" sx={{color:"lightgray"}}>{category}</Typography>)}
          { price &&(<Typography variant="h6">{price}</Typography>)}
,
      </Card>
      </Box>
  )
}

export default ProductCard