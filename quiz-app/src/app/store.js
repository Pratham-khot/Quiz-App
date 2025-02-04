import { configureStore } from '@reduxjs/toolkit'
import { quizReducer } from '../slices/quizSlice'
import { answerReducer } from '../slices/anwerSlice'

 const store = configureStore({
  reducer: {
    quiz:quizReducer,
    answer:answerReducer,
  },
})
export default store