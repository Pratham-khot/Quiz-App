import React from 'react'
import {useSelector} from 'react-redux'
import quiz from '/images/quiz.jpg'
const Home = () => {
    
    //const {quizes}=useSelector((state)=>state.quiz);
    console.log("Hii");
    

  return (
    <>
      <header className="h-[9vh] bg-[#444645] px-[74px] flex justify-self items-center z-10 sticky top-0">
        <p className="text-[#FAA91C] text-[22px] font-bold">QuizApp</p>
      </header>
      <div className='flex flex-col justify-center items-center p-[10px]'>
        <img src={quiz} alt="" className='h-[60vh] '/>
      </div>
    </>
  );
}

export default Home