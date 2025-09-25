"use client"
import { HandleOnInput } from "./HandleOnInput"
 export const StepThree=({errors,setErrors})=>{
return(
    <div >
        
        <HandleOnInput  id="birth"  name="birth"  type="date" placeholder="-- / -- / -- " text="Date of birth" errors={errors} setErrors={setErrors}/>
        <HandleOnInput  id="file"  name="file" type="file"  text="Profile image" errors={errors} setErrors={setErrors} />
    </div>
)
 }