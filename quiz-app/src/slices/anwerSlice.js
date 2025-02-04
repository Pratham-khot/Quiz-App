import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answer",
  initialState: {
    answers: [],
  },
  reducers: {
    addAnswers: (state, action) => {
      const { questionId, optionId } = action.payload; // {quistionId, optionId}
      console.log("selected options",questionId, optionId);
      

      const existingElement = state.answers.find((answer) => {
        return answer.questionId === questionId;
      });

      if (existingElement) {
        // update
        state.answers = state.answers.filter((answer) => {
          if (answer.questionId === questionId) {
            answer.optionId = optionId;
          }
          return true;
        });
      } else {
        // add
        state.answers.push({ questionId, optionId });
      }
    },
  },
});

export const answerReducer = answerSlice.reducer;

export const { addAnswers } = answerSlice.actions;