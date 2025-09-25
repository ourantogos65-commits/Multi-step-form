"use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Button } from "./Button";
// import { HandleOnInput } from "./HandleOnInput";
import { useState, useEffect } from "react";
export const InputAdd=()=> {
// const [errors, setErrors] = useState({
//   name: null,
//   age: null,
// });

// const onClickButton = (event) => {
//   event.preventDefault();
  
//   if (event.target.name.value.length < 5) {
//     setErrors({ ...errors, name: "too short name" });
//   }
//   else{
//     setErrors("")
//   }
//   if (
//     Number(event.target.age.value) > 0 &&
//     Number(event.target.age.value) < 100
//   ) {
//     setErrors({ ...errors, age: null });
//   } else {
//     setErrors({ ...errors, age: "wrong age input" });
//   }
//   console.log(event.target.age.value);
// };
 
//   return (
//     <div className="p-10">
//       <form className="flex flex-col gap-2" >
//         <div className="flex gap-2">
//           <label htmlFor="something">Name</label>
//           <HandleOnInput name={"name"}/>
//           {/* {errors.name && <p className="text-red-600">{errors.name}</p>} */}
//         </div>
//         {/* {/* <div className="flex gap-2">
//           <label htmlFor="">Age</label>
//           <input type="text" name="age" className="border-2 rounded-md" />
//           {errors.age && <p className="text-red-600">{errors.age}</p>}
//         </div> */}
       
//      <Button ></Button>
//         <button className="cursor-pointer border-2 p-4 py-2 rounded-md w-fit">
//           Next
//         </button>
//       </form>
//     </div>
//   );
// }
 



  const [count, setCount] = useState(0);

  useEffect(() => {
    const localStorageCount = localStorage.getItem("count");
    if (localStorageCount) {
      setCount(Number(localStorageCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex">
      <div className="flex flex-col">
        <p>Home {count}</p>
        <button
          className="p-4 bg-blue-500 text-white rounded-md"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          className="p-4 bg-red-500 text-white rounded-md"
          onClick={decrementHandler}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
 