import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { addProducts} from '../../services/service'
import { useDispatch, useSelector } from 'react-redux'
const NewArrivals = () => {
   
    const dispatch = useDispatch();
    const products = useSelector((state)=>{console.log(state);return state.products})    
    useEffect(()=>{
                dispatch(addProducts())
    },[dispatch])

    
    return (
        <Box p='20px'>
            <Box display="flex" width="100%">
                <Typography variant="h4" ml='28px' mb='20px'>New Arrivals</Typography>
                <Link style={{ textDecoration: "none", justifySelf: "flex-end" }}>See more</Link>
            </Box>
            <Box display="flex" justifyContent="space-around">
                <ProductCard imageURL="data:image/jpeg;base64,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"
                    name="Grande"
                    category="Blossom pouch"
                    price="$39.49"
                ></ProductCard>
                <ProductCard imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7VNOMHVybCMUGGBDnvyC-IMs68HrE923qjs-8XtoOw&usqp=CAU&ec=48665698"
                    name="Grande"
                    category="Blossom pouch"
                    price="$39.49"
                ></ProductCard>
                <ProductCard imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-1yE9Rdl9lWdXPKJeN4AovCk8RIrQ9RXmLM_eI68xQ&usqp=CAU&ec=48665698"
                    name="Grande"
                    category="Blossom pouch"
                    price="$39.49"
                ></ProductCard>
                <ProductCard imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90c9ZW7PbToqHtrsIplTVv3_Y9OXT2KEChLzkmz5vxg&usqp=CAU&ec=48665698"
                    name="Grande"
                    category="Blossom pouch"
                    price="$39.49"
                ></ProductCard>
                <ProductCard imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mo8bekO0A32ZsFT_kHBQ7n34YUfrO5z8sHtJX9vdasgnATOwpOaCO2myTa42GUuEkNFlbORH5X0&usqp=CAU&ec=48665698"
                    name="Grande"
                    category="Blossom pouch"
                    price="$39.49"
                ></ProductCard>
                <ProductCard imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mo8bekO0A32ZsFT_kHBQ7n34YUfrO5z8sHtJX9vdasgnATOwpOaCO2myTa42GUuEkNFlbORH5X0&usqp=CAU&ec=48665698"
                    name="Grande"
                    category="Blossom pouch"
                    price="$39.49"
                ></ProductCard>


            </Box>
        </Box>
    )
}

export default NewArrivals