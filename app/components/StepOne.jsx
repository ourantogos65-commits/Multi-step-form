
"use client"
import { HandleOnInput } from "./HandleOnInput"

export const StepOne = ({ errors, setErrors }) => {
  return (
    <div>
      <HandleOnInput id="firstname" name="firstname" type="text" text="First name" placeholder="Your first name" errors={errors} setErrors={setErrors} />
      <HandleOnInput id="lastname" name="lastname" type="text" text="Last name" placeholder="Your last name" errors={errors} setErrors={setErrors} />
      <HandleOnInput id="username" name="username" type="text" text="Username" placeholder="Your username" errors={errors} setErrors={setErrors} />
    </div>
  )
}
