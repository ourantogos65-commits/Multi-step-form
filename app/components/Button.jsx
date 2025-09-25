"use client"

 export const Button=({setCurrentIndex,currentIndex})=>{
return(
  
      <div className=" w-[416px] h-[40px]   justify-between text-center  flex gap-[8px] ">
{currentIndex >0 && (<button onClick={() => setCurrentIndex(currentIndex - 1)}  className="border rounded-md border-gray-400 text-black w-30" >back</button>)}
{currentIndex <4 && (<button   type="submit"  className="border rounded-md bg-black text-white w-30" >contiune</button>)}

  
</div>
    
)
 }

