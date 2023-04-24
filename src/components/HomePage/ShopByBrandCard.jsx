import { Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ShopByBrandCard = ({imageURL}) => {
  return (
    <>
        <Card   sx={{backgroundColor:"lightgray"}}>
                <Link to="#">
                <img style={{width:"170px", height:"130px"}} src={imageURL} alt="#" ></img>
                </Link>
        </Card>
    </>
  )
}

export default ShopByBrandCard