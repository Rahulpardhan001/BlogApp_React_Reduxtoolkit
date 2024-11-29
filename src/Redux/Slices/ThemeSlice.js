import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isDarkMode:
    localStorage.getItem("isDarkMode") != undefined
      ? JSON.parse(localStorage.getItem("isDarkMode"))
      : false,//light mode is the default
}

export const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        toogleMode: (state)=>{
        state.isDarkMode = !state.isDarkMode;
        localStorage.setItem("isDarkMode", state.isDarkMode);
        },
    },
});

export const {toogleMode}  = uiSlice.actions;
export default uiSlice.reducer;

