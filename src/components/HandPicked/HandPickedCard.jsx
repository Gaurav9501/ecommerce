import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

const HandPickedCard = ( {imageURL, category = "none",}) => {

    const navigate = useNavigate();
    const handleCategory = () => {
        console.log("called category")
        navigate("/category", { state: { category } })
    }

    return (
        <Box >
            <Card sx={{
                width: "250px",
                height: "250px",
                borderRadius: "20px"
            }}>
                <button style={{ border: "none", cursor: "pointer" }} onClick={handleCategory}>
                    <img style={{ width: "250px", height: "250px" }} src={imageURL} alt="#" />
                </button>
            </Card>
        </Box>
    )
}
export default HandPickedCard