import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Question from "./Question";
import { Button,Modal,Box,Typography } from "@mui/material";
import { useState } from "react";
import Scorecard from "./Scorecard";
const QuizPage = () => {
  const { quizId } = useParams();
  const quizData = useSelector((state) => state.quiz);

  const { answers } = useSelector((state) => state.answer);
  const[marks,setMarks]=useState(0)
  const [open, setOpen] = useState(false); 
  const quiz=quizData.quizes.find((q)=>q.quizId===quizId)
  console.log(answers);

  if(!quiz)return <p>Quiz Not Found</p>
function handleSubmit(){
 
  let finalArray = [];
  let newMarks=0;

  for (let i = 0; i < answers.length; i++) {
    
    const newArray = quiz.questions.filter((q) => {
      if (
        q.questionId === answers[i].questionId &&
        q.correctAnswer === answers[i].optionId
      ) {
        newMarks++;
        return true;
      }
    });

    finalArray = [...finalArray, ...newArray];
  }
  setMarks(newMarks);
  setOpen(true);
  
  
  console.log("Marks: ", newMarks);
  console.log("Coorect Answer: ",finalArray);
  
  
  
}

  
  

  return (
    <>
      <div>
        <p className="text-4xl text-center font-semibold py-8">{quiz.title}</p>
        <p className="text-2xl text-center font-semibold py-1">
          {quiz.description}
        </p>
        <Divider />
        <div className="flex flex-col px-36 p-8 gap-8">
          {quiz.questions.map((question, index) => {
            return (
              <div className="flex gap-4 key" key={question.questionId}>
                <span>Q. {index + 1}</span>
                <Question question={question} />
              </div>
            );
          })}
          <div className="flex justify-center py-8">
            <Button
              variant="contained"
              color="success"
              className="w-36"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <a href="/" className="text-[blue]">
              Go Back to Homepage
            </a>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 450, // Adjust width as needed
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center content horizontally
            justifyContent: "center", // Center content vertically
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Quiz Result
          </Typography>
          <Scorecard newMarks={marks} />
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default QuizPage;
