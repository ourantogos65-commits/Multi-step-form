"use client"

import { HandleOnInput } from "./HandleOnInput"
 export const StepTwo=()=>{
return(
    <div>
              <HandleOnInput type={"email"} placeholder={"Your email "} text={"Email"} />
                 <HandleOnInput type={"tel"} placeholder={"Your phone number"} text={"Phone number"} />
                 <HandleOnInput type={"password"} placeholder={"Your password"} text={"Password"} />
                 <HandleOnInput type={"password"} placeholder={"Confirm password"} text={"Confirm password"} />
    </div>
)
 }