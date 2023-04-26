import { Box, Checkbox, Divider, FormControlLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import Hero from '../Hero/Hero'
import ProductCard from '../HomePage/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { getProdyctByCategory } from '../../services/service'
import AppsIcon from '@mui/icons-material/Apps';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { useNavigate } from 'react-router'


const CategoryCompo = ({ categoryType = "Handbags" }) => {

  const navigate = useNavigate();
  const { state } = useLocation();
  const { category } = state
  const dispatch = useDispatch();

  const [smallCheck, setSmallCheck] = useState(false)
  const [mediumCheck, setMediumCheck] = useState(false)
  const [largeCheck, setLargeCheck] = useState(false)
  const [view, setView] = useState(5)
  const cato = useSelector((state) => { return state.products.category })
  
  // const cato = useSelector((state)=>{return state.category})

  const handleNavigate = ()=>{

  }
  
  useEffect(() => {
    dispatch(getProdyctByCategory(category))
  }, [])
 
  return (
    <Box>
      <Banner></Banner>
      <Hero></Hero>
      <Typography color="#1B4B66" variant='h4' ml="10px" mb="10px">{categoryType}</Typography>

      <Box display="flex" ml="10px">

        {/* Filtring system */}
        <Box width="300px" height="800px" marginRight="20px" >

          {/* Size */}
          <Box>
            <Box display="flex">
              <Typography variant='h5' fontWeight="bold">Size</Typography>
            </Box>

            {/* {size && ( */}
              <Box display="flex" flexDirection="column">
                <FormControlLabel
                  label="small"
                  control={
                    <Checkbox
                      checked={smallCheck}
                      onChange={() => { setSmallCheck((preSize) => { console.log(!preSize); return !preSize }) }} />}
                />
                <FormControlLabel
                  label="medium"
                  control={<Checkbox checked={mediumCheck} onChange={() => { setMediumCheck((preSize) => { return !preSize }) }} />}
                />

                <FormControlLabel
                  label="large"
                  control={<Checkbox checked={largeCheck} onChange={() => { setLargeCheck((preSize) => { return !preSize }) }} />}
                />
              </Box>
            {/* )} */}
          </Box>

          {/* Color */}
          <Box marginTop="20px">

            <Box display="flex">
              <Typography variant="h5" fontWeight="bold">Color</Typography>
            </Box>
            {/* {colo && ( */}
              <Box display="flex" flexDirection="column">
                <FormControlLabel
                  label="Blue"
                  control={<Checkbox />}
                />

                <FormControlLabel
                  label="Maroon Red"
                  control={<Checkbox />}
                />

                <FormControlLabel
                  label="Crimson Red"
                  control={<Checkbox />}
                />

                <FormControlLabel
                  label="Seinna Pink"
                  control={<Checkbox />}
                />

                <FormControlLabel
                  label="Teal"
                  control={<Checkbox />}
                />

                <FormControlLabel
                  label="Blue"
                  control={<Checkbox />}
                />
                <FormControlLabel
                  label="Aquamarine"
                  control={<Checkbox />}
                />
                <FormControlLabel
                  label="Off-White"
                  control={<Checkbox />}
                />

                <FormControlLabel
                  label="Muave Orange"
                  control={<Checkbox />}
                />
              </Box>
            {/* )} */}
          </Box>

          {/* Brand */}
          <Box></Box>
          {/* Price Range */}
          <Box></Box>
          {/* Discount */}
          <Box></Box>
          {/* Availability */}
          <Box></Box>
        </Box>

        {/* This box is to show all the products */}

        {/* <Box width="60%">
              <Box display="flex" justifyContent="space-around">
              {cato.map((product)=>(<ProductCard imageURL={product.imageURL}  name={product.name} price={product.price} />))}
              </Box>
        </Box>
         */}

        {/* pagination */}
        <Box display="flex"> </Box>

        {/* actual data */}
        <Box>
          <Box display="grid" gap="1.5rem" gridTemplateColumns={`repeat(${view},minmax(0,1fr))`}>

            <Box gridColumn="span 5" >
              <Box display="flex">
                <AppsIcon sx={{ mr: "20px" }} />
                <DensitySmallIcon sx={{ mr: "20px" }} />
                <Typography sx={{ ml: "130px" }}>Showing 1-40 of {cato.length} items</Typography>
                <Typography sx={{ ml: "600px" }}>To Show: </Typography>
                <input type="text" placeholder='1' style={{ backgroundColor: "lightgray", width: '20px', borderStyle: "none" }} />
                <Typography>Sort By</Typography>

              </Box>
            </Box>

            {cato.map((product) => (
              <ProductCard product={product} />))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CategoryCompo



