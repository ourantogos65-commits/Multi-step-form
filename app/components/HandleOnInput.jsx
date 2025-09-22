"use client"
 export const HandleOnInput=({src, type,text,placeholder})=>{
return(
    <div >
        <div className=" flex flex-col pb-3">
             <label className="font-extrabold flex gap-0.5 text-gray-700 "> {text} 
                <p className=" text-red-600">  *</p>
             </label>
       <input 
       type={`${type}`} 
       placeholder={`${placeholder}`}  
       src={`${src}`}
       className="rounded-lg border border-gray-300 w-full h-[40px] pl-2" />
        </div>
      
    </div>
)
 }