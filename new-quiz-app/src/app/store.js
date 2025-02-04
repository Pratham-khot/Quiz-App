import {configureStore} from '@reduxjs/toolkit'
import { quizReducer } from '../slices/questionSlice';


export const store=configureStore({
    reducer:{
        quiz:quizReducer,
        
    }
});