import {actions} from '../Redux/ProductRedux'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const addProducts = createAsyncThunk(
    "products/getProducts",
    async (_, { dispatch }) => {    
        return fetch("http://localhost:1235/getNewArrivals")
        .then((res) => res.json())
        .then((json) => {
            dispatch(actions.AddAllProducts(json));
        });
    }
);

export const getProdyctByCategory = createAsyncThunk(
    "products/getProductByCategory",
    async(category,{dispatch})=>{
         const url = `http://localhost:1235/getProductByCategory?category=${category}`
         return fetch(url)
        .then((res)=>{return res.json()})
        .then((json)=>{
            dispatch(actions.addProductByCategory(json));
        })
});


export const getNewArrivals = createAsyncThunk(
    "products/getNewArrivals",
    async(category,{dispatch})=>{
         const url = `http://localhost:1235/getByName?category=${category}`
         return fetch(url)
        .then((res)=>{return res.json()})
        .then((json)=>{
            dispatch(actions.addProductByCategory(json));
        })
});

