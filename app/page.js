"use client"

import { useEffect, useState } from "react"
import { StepOne } from "./components/StepOne"
import { StepTwo } from "./components/StepTwo"
import { StepThree } from "./components/StepThree"
import { Sub } from "./components/Sub"
import { Button } from "./components/Button"
import { Hero } from "./components/Hero"

const steps = [StepOne, StepTwo, StepThree, Sub]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [errors, setErrors] = useState({})

  const CurrentStep = steps[currentIndex] || StepOne


  const validate = (data) => {
    const errors = {}

    const formData = Object.fromEntries(data.entries())

    const firstname = formData.firstname
    const lastname = formData.lastname
    const username = formData.username
    const email = formData.email
    const number = formData.number
    const pass = formData.pass
    const Confirmpass = formData.Confirmpass
    const birth = formData.birth
    const file = data.get("file")
    const fileName = file?.name || ""

    if (currentIndex === 0) {
      if (!firstname || firstname.length < 5)
        errors.firstname = "Нэрээ оруулна уу"
      if (!lastname || lastname.length < 5)
        errors.lastname = "Овгоо оруулна уу"
      if (!username || username.length < 5)
        errors.username = "Хэрэглэгчийн нэрээ оруулна уу"
    }

    if (currentIndex === 1) {
      if (!email) errors.email = "Мэйл оруулна уу"
      if (!number || number.length !== 8)
        errors.number = "8 оронтой дугаар оруулна уу"
      if (!pass || pass.length !== 6)
        errors.pass = "6 оронтой нууц үг оруулна уу"
      if (!Confirmpass || Confirmpass !== pass)
        errors.Confirmpass = "Нууц үг таарахгүй байна"
    }

    if (currentIndex === 2) {
      if (!birth) errors.birth = "Төрсөн өдөр оруулна уу"
      if (!fileName) errors.file = "Зураг оруулна уу"
    }

    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      const existing =
        JSON.parse(localStorage.getItem("formData")) || {}

      const newData = {
        ...existing,
        ...formData,
        file: fileName,
      }

      localStorage.setItem("formData", JSON.stringify(newData))
    }

    return Object.keys(errors).length === 0
  }

 
  useEffect(() => {
    const savedIndex = localStorage.getItem("currentindex")

    if (savedIndex !== null) {
      const index = Number(savedIndex)

      if (index >= 0 && index < steps.length) {
        setCurrentIndex(index)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("currentindex", currentIndex)
  }, [currentIndex])

  // ✅ Submit handler
  const onClickButton = (event) => {
    event.preventDefault()

    const data = new FormData(event.target)

    if (!validate(data)) return

    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <form onSubmit={onClickButton}>
      <div className="bg-[#F4F4F4] w-full h-screen flex flex-col justify-center items-center">
        <div className="w-[480px] h-[655px] rounded-md bg-white">
          <div className="p-5 m-5">
            <Hero />
            <CurrentStep errors={errors} setErrors={setErrors} />
          </div>
        </div>

        <div className="absolute mt-[500px]">
          <Button
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </form>
  )
}

export default Home