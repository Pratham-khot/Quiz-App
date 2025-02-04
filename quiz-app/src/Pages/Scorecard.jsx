import React from 'react'

const Scorecard = ({newMarks}) => {
  return (
    <>
        <div className='flex  justify-center items-center h-[50vh] w-[30vw] '>
            <div className='flex flex-col justify-center items-center pr-10'>
                <p className='text-[black]'>Total Marks</p>
                <p>20</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-[orange]'>Marks Scored</p>
                <p>{newMarks *2}</p>
            </div>
        </div>
    </>
  )
}

export default Scorecard