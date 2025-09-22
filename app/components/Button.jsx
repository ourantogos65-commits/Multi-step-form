"use client"
 export const Button=({setCurrentIndex,currentIndex})=>{
return(
    <div className=" ">
      <div className=" w-[416px] h-[40px]   text-white justify-between text-center  flex gap-[8px] ">
{currentIndex >0 && <button className="border rounded-md border-gray-400 text-black w-30" onClick={()=>setCurrentIndex(currentIndex-1)}>back</button>}
  <button className="bg-[#121316] w-70 rounded-md "  onClick={()=>setCurrentIndex(currentIndex+1)}>contiune</button>
  
</div>
    </div>
)
 }