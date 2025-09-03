import { nanoid } from "nanoid"
import React, { useId } from "react"

export default React.forwardRef(function Input({
    type="text",
    placeholder="Enter your text...",
    className="",
    inputClassName="",
    label="",
    ...props
}, ref) {
    const id = nanoid();
    return (
        <div className={`input-container flex flex-col items-center justify-center gap-2 ${className}`}>
            {label && <label htmlFor={id} className={`text-[1.5rem] font-[380]`}>{label}</label>}
            <input 
                type={type} 
                ref={ref}
                placeholder={placeholder}
                className={`h-[4.5vh] px-3 outline-none py-2 text-xl text-black duration-200 focus:bg-gray-50 ${inputClassName}`}
                {...props}
                id={id}
            />
        </div>
    )
})
