import React,{useState} from 'react'
import "./ReviewComponent.css"
import {People} from "../src/Constants/People"
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa"
function ReviewComponent() {
  console.log(People)
  const [index, setIndex] = useState(0)
  const {name, age, image, text, job} = People[index]
  console.log(name)

  const checkError = (number) => {
    
   if(number > People.length - 1){
        return 0
   }
   if(number < 0){
    return People.length - 1
   }
   return number

  }

  const nextPhoto = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkError(newIndex)
    })
  }
  const prevPhoto = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkError(newIndex)
    })
  }
const randomChange = () => {
   let randomNumber = (Math.floor(Math.random() * People.length))
 if(randomNumber === index){
  randomNumber = index + 1
 }
 setIndex(checkError(randomNumber))
  }

  return (
   <>
  <div className='container mt-10 flex justify-center'>

   <div className='h-auto w-[30em] py-3 rounded-md shadow-lg bg-slate-100'>
      <div className='image flex justify-center mb-3 relative'>
       <FaQuoteRight className='text-blue-900 absolute left-[12em] bottom-[130px]'/>
        <img src={image} className="w-[140px] h-[150px] rounded-[600px]" alt={name}/>
      </div>
         <p className='text-blue-900 font-bold text-md font-poppins'>{name}</p>
         <h3 className='font-bold text-orange-300 font-poppins text-[20px]'>{job}</h3>
         <div className='flex justify-center gap-3 py-4'>
         <FaChevronLeft onClick={prevPhoto}  className='text-blue-500 w-[30px] hover:text-black'/>
         <FaChevronRight onClick={nextPhoto} className='text-blue-500 w-[30px] hover:text-black'/>
         </div>


         <button className='bg-blue-500 text-black font-poppins px-4 py-3' onClick={randomChange} >Suprise me</button>
     </div>
  </div>
     

   </>
    
  )
}

export default ReviewComponent