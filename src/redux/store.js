import { configureStore } from "@reduxjs/toolkit";
import {topic} from './slice'
export const store = configureStore({
    reducer:{
        quiz : topic.reducer
    }
})