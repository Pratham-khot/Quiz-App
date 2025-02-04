import React from "react";

import { addAnswers } from "../slices/anwerSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>{question.question}</p>
        {question.options.map((option,index) => {
          return ( 
              <div className="flex gap-4" key={index} >
                
                <input
                  type="radio"
                  name={question.questionId}
                  value={option.optionId}
                  id={question.question}
                  onChange={(e) =>
                    dispatch(
                      addAnswers({
                        questionId: question.questionId,
                        optionId: e.target.value,
                      })
                    )
                  }
                />
                <label htmlFor={question.question}>{option.answer}</label>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default Question;
