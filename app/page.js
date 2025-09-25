


"use client"
import { useEffect, useState } from "react"
import { StepOne } from "./components/StepOne"
import { StepTwo } from "./components/StepTwo"
import { StepThree } from "./components/StepThree"
import { Button } from "./components/Button"
import { Hero } from "./components/Hero"
import { Sub } from "./components/Sub"

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [errors, setErrors] = useState({})

  const CurrentStep = [StepOne, StepTwo, StepThree,Sub,InputAdd][currentIndex]

  const validate = (data) => {
    const errors = {}
  
    

    const firstname = data.get("firstname")
    const lastname = data.get("lastname")
    const username = data.get("username")
    const email = data.get("email")
    const number=data.get("number")
    const pass = data.get("pass")
    const Confirmpass =data.get("Confirmpass")
    const birth =data.get("birth")
    const file =data.get("file")
console.log("hello",validate)
    if (currentIndex === 0) {
      if (!firstname || firstname.length < 5) errors.firstname = "Нэрээ оруулна уу"
      if (!lastname || lastname.length < 5) errors.lastname = "Овгоо оруулна уу."
      if (!username || username.length < 5) errors.username = "Хэрэглэгчийн нэрээ оруулна уу"
    }
    if (currentIndex === 1) {
      if (!email) errors.email = "Зөв мэйл хаяг оруулна уу"
      if (!number || number.length!==8 ) errors.number = "8 оронтой тоо оруулна уу"
      if (!pass || pass.length!==6) errors.pass = "6 оронтой тоо оруулна уу"
      if (!Confirmpass || Confirmpass !==pass) errors.Confirmpass="Таны оруулсан нууц үг таарахгүй байна"
    }
   console.log(Confirmpass)
   if (currentIndex ===2) {
     if(!birth ) errors.birth="Төрсөн өдрөө оруулна уу" 
     if(!file ) errors.file="Профайл зурагаа оруулна уу" 
   }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  
  useEffect(() => {
    const localStorageCount = localStorage.getItem("currentindex");
    if (localStorageCount) {
      setCurrentIndex(Number(localStorageCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentindex", currentIndex);
  }, [currentIndex]);
  

   console.log("hello",data)
 
  const onClickButton = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    if (!validate(data)) return
    setCurrentIndex(currentIndex + 1)
  }
 
  return (
    <form onSubmit={onClickButton}>
      <div className="bg-[#F4F4F4] w-full h-screen flex flex-col justify-center items-center">
        <div className="w-[480px] h-[655px] rounded-md bg-white">
          <div className="p-5 m-5 ">
            <Hero />
            <CurrentStep errors={errors} setErrors={setErrors} />
          </div>
        </div>
        <div className="absolute mt-[500px]">
          <Button currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </form>
  )
}

export default Home
