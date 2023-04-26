import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProducts } from "../../services/service";
import ProductCard from "../HomePage/ProductCard";

const NewArrivals = () => {
   
    const dispatch = useDispatch();
    const products = useSelector((state)=>{return state.products})    
    useEffect(()=>{
                dispatch(addProducts())
    },[dispatch])

    console.log(products.products)
    
    return (
        <Box p='20px'>
            <Box display="flex" width="100%">
                <Typography variant="h4" ml='28px' mb='20px'>New Arrivals</Typography>
                <Link style={{ textDecoration: "none", justifySelf: "flex-end" }}>See more</Link>
            </Box>
            <Box display="flex" justifyContent="space-around">
                {products.products.map((product)=>(
                <ProductCard product={product} />))}
            </Box>
        </Box>
    )
}

export default NewArrivals