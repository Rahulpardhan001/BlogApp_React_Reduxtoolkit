import {configureStore} from '@reduxjs/toolkit'
import { uiSlice } from './Slices/ThemeSlice'
import authSlice from './Slices/AuthSlice/authSlice'

export const store = configureStore({
    reducer:{
        ui:uiSlice.reducer,
        auth:authSlice,
    },
})