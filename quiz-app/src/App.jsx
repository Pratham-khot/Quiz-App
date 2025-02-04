import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import QuizPage from "./Pages/QuizPage";
function App() {
  return(
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='quiz-page/:quizId' element={<QuizPage/>}/>
    <Route path="*" element={<h1>Not found </h1>} />
  </Routes>
  )
}

export default App;
