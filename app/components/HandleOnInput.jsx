

"use client"

export const HandleOnInput = ({ id, name, type, text, placeholder, errors, setErrors }) => {
  return (
    <div className="flex flex-col pb-3 h-[90px]">
      <label htmlFor={id} className="font-extrabold flex gap-0.5 text-gray-700">
        {text} <p className="text-red-600">*</p>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-lg border border-gray-300 w-full h-[40px] pl-2"
        onChange={() => setErrors({ ...errors, [name]: null })} 
      />
      {errors[name] &&  <p className="text-red-600 ">{errors[name]}</p>}
    </div>
  )
}
