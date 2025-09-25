// // app/page.js
// "use client"
// import { useState } from "react"
// import { StepOne } from "./components/StepOne"
// import { StepTwo } from "./components/StepTwo"
// import { StepThree } from "./components/StepThree"
// import { Button } from "./components/Button"
// import { Hero } from "./components/Hero"

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)

 
//   const [formData, setFormData] = useState({
//     name: "",
//     birthDate: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     image: null,
//   })

 
//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const steps = [
//     <StepOne formData={formData} handleChange={handleChange} />,
//     <StepTwo formData={formData} handleChange={handleChange} />,
//     <StepThree formData={formData} handleChange={handleChange} />,
//   ]

//   return (
//     <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
//       <div className="w-[480px] h-[655px] rounded-md bg-white flex flex-col justify-between">
//         <div className="p-5 m-5">
//           <Hero />
//           {steps[currentIndex]}
//         </div>
//         <div className="p-5">
//           <Button currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Home
