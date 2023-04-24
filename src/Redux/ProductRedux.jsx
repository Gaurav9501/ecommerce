import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    products:[],
    category:[],
    Brands:[],
    test:"Gaurav"
}

const {actions,reducer} = createSlice({
    name:"products",
    initialState:initialState,
  reducers:{
        AddAllProducts:(state,action)=>{
            state.products = action.payload      
        },
        addProductByCategory:(state,action)=>{
            state.category = action.payload
        },
        getProductBySize:(state,payload)=>{
            // const data = state.products.filter((data)=>data.size===payload.size)
            // // process the data into proper format
            // return data
        },
        getProductByColor:(state,payload)=>{
            // const data = state.products.filter((data)=>data.color===payload.color)
            // // process the data into proper format
            // return data
        },
        default: (state)=>(state)
  }  
})





export {actions}
export default reducer

