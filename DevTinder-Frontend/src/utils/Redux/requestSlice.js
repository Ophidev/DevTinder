import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const requestSlice = createSlice({

    name : "requests",
    initialState : null,
    reducers : {

        addRequests : (state,action) => action.payload,
        removeRequests : (state,action) => null,
    },
    
});

export const {addRequests,removeRequests} = requestSlice.actions;
export default requestSlice.reducer;