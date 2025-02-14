import { ReactNode, ButtonHTMLAttributes, SetStateAction, ChangeEvent } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    className?: string;
    size?: "full";
    disabled?: boolean,
    onClick?: () => void,
    children: ReactNode
}

export default function Button({ variant, className, size, disabled, onClick, children }: buttonProps) {
    const variants = {
        primary: "bg-primary text-white focus:bg-secondary hover:bg-primary/[0.8]",
        secondary: "bg-white text-primary focus:bg-tetiary hover:bg-tetiary/[0.8] border border-primary"
    }

    return (
        <button className={`rounded-[8px] p-[11px_27px]
            ${variants[variant || "primary"]}
            ${className} 
            ${disabled ? "opacity-[0.25]" : ""}
            ${size === "full" ? "w-full" : "sm:w-fit w-full"}
        `}
        disabled={disabled}
        onClick={() => onClick}
        >
            { children }
        </button>
    )
}