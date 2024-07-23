'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkHTMLAttributes } from "react";

interface tabProps extends LinkHTMLAttributes<HTMLLinkElement> {
    to: string;
    label: string;
    icon: any;
}

export default function Tab ({ to, label, icon }: tabProps) {
    const pathname = usePathname()

    return (
        <Link
            href={to}
            className={`flex items-center justify-center gap-2 w-[130px] h-[46px] p-[11px_27px] hover:text-primary font-semibold rounded-[8px]
                ${pathname === to ? "bg-tetiary text-primary" : ""}
            `}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </Link>
    )
}