import { createSlice } from "@reduxjs/toolkit";
import { quizes } from "../utils/data";
const quizSlice=createSlice({
    name:'quiz',
    initialState:{
        quizes,
    },
    reducers:{
        addQuestions:()=>{},
    },
})

export const quizReducer=quizSlice.reducer;
export const {addQuestions}=quizSlice.actions;