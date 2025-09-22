"use client"
import { HandleOnInput } from "./HandleOnInput"
 export const StepThree=()=>{
return(
    <div >
     <HandleOnInput type={"date"} placeholder={"-- / -- / -- "} text={"Date of birth"} />

        <HandleOnInput type={"file"}  text={"Profile image"} />

     
     
   
    </div>
)
 }