'use client'

import { InputHTMLAttributes, SVGProps, useState } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    label?: string;
    name: string;
    type: string;
    error: string;
    placeholder?: string;
    leftIcon?: any
}

export default function Input({ className, disabled, label, name, type, error, placeholder, leftIcon }: inputProps) {
    const [focus, setFocus] = useState(false)


    return (
        <div className="flex flex-col gap-1">
            { label ? <label htmlFor={name} className="text-[12px]">{label}</label> : "" }

            <div className={`flex items-center gap-2 relative rounded-[8px] h-[48px] p-1 px-3 border border-gray duration-500
                ${error ? "border-red text-red" : "border-gray"}
                ${focus ? "border-primary shadow-input-active" : "border-gray"}
            `}>
                <span>{ leftIcon }</span>
                <input 
                    className={` p-2 w-full outline-none
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    name={name}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

                { error ? <p className="absolute right-4 text-[12px]">{error}</p> : "" }
            </div>
        </div>
    )
}