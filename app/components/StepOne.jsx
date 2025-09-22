"use client"
import { HandleOnInput } from "./HandleOnInput"
 export const StepOne=()=>{
return(
    <div>
        
         <HandleOnInput placeholder={"Your first name "} text={"First name"} />
         <HandleOnInput placeholder={"Your last name "} text={"Last name"} />
         <HandleOnInput placeholder={"Your username "} text={"Username"} />
   

    
    </div>
   

)
 }