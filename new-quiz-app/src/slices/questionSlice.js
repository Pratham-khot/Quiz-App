import { createSlice } from "@reduxjs/toolkit";
import { quizes } from "../utils/data";


const questionSlice=createSlice({
    name:"question",
    initialState:{
        quizes:quizes,
    },
    reducers:{
        addQuestions:{

        },
    },
})

export const quizReducer=questionSlice.reducer
export const {addQuestions}=questionSlice.actions;