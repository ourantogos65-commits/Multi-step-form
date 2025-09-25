


"use client"
import { HandleOnInput } from "./HandleOnInput"

export const StepTwo = ({ errors, setErrors }) => {
  return (
    <div>
      <HandleOnInput id="email" name="email" type="email" text="Email" placeholder="Your email" errors={errors} setErrors={setErrors} />
      <HandleOnInput id="number" name="number" type="tel" text="Phone number" placeholder="Your phone number" errors={errors} setErrors={setErrors} />
      <HandleOnInput id="pass" name="pass" type="password" text="password" placeholder="Your password" errors={errors} setErrors={setErrors} />
      <HandleOnInput id="Confirmpass" name="Confirmpass" type="password" text="Confirm password" placeholder="Confirm password" errors={errors} setErrors={setErrors} />
    </div>
  )
}
