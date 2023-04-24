
import { configureStore,ThunkAction,Action } from "@reduxjs/toolkit";
import reducer  from "./ProductRedux";

export const store = configureStore(
    {
        reducer:{products:reducer},
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    }
    )