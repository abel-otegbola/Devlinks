'use client'

import { useState } from "react";

interface inputProps {
    className?: string;
    disabled?: boolean;
    label?: string;
    name: string;
    type: string;
    value: string | number;
    onChange: (value: string) => void;
    error: string | undefined;
    placeholder?: string;
    leftIcon?: any
}

export default function Input({ className, disabled, label, name, value, type, onChange, error, placeholder, leftIcon }: inputProps) {
    const [focus, setFocus] = useState(false)


    return (
        <div className="flex flex-col gap-1">
            { label ? <label htmlFor={name} className="text-[12px]">{label}</label> : "" }

            <div className={`flex items-center gap-2 relative rounded-[8px] h-[48px] p-1 px-3 border border-gray duration-500
                ${error && !focus ? "border-red text-red" : "border-gray"}
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
                    value={value}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={(e) => onChange(e.target.value)}
                />

                { error && !focus ? <p className="absolute right-2 px-2 text-[12px] bg-white/[0.8] backdrop-blur-sm">{error}</p> : "" }
            </div>
        </div>
    )
}