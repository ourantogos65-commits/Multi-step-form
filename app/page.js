"use client"
import { useState } from "react"
import { StepOne } from "./components/StepOne"
import { StepThree } from "./components/StepThree"
import { StepTwo } from "./components/StepTwo"
import { Button } from "./components/Button"
import { Hero } from "./components/Hero"

const Home=()=>{
const [currentIndex, setCurrentIndex]=useState(0)
const CurrentStep=[StepOne,StepTwo,StepThree][currentIndex];


  return(
    <div className="bg-[#F4F4F4] w-full h-screen flex flex-col   justify-center  items-center ">
   <div className="m-10 w-[480px] h-[655px] rounded-md  bg-white">

   <div className=" p-5 m-5 ">
  <Hero/>
  <CurrentStep />
   </div>
   </div>
   <div className="absolute mt-130 ">
    <Button  currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
   </div>
    </div>
  )
}
export default Home