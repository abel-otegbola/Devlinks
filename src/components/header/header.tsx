'use client'
import { Eye, Link, UserCircle } from "@phosphor-icons/react";
import Image from "next/image";
import Tab from "../tab/tab";
import Button from "../button/button";

type navTab =  {
    id: number | string,
    label: string,
    to: string,
    icon: any
}

export default function Header() {
    const navTabs: navTab[] = [
        { id: 0, label: "Links", to: "/links", icon: <Link /> },
        { id: 1, label: "Profile details", to: "/profile-details", icon: <UserCircle /> }
    ]

    return (
        <div className="flex items-center justify-between bg-white p-6 rounded-[8px]">
            <Image src="/images/logo-full.svg" width={150} height={30} alt="logo" />

            <nav className="flex items-center">
                {
                    navTabs.map((tab: navTab) => (
                        <Tab key={tab.id} label={tab.label} to={tab.to} icon={tab.icon} />
                    ))
                }
            </nav>

            <Button variant="secondary" className="w-fit">
                <span className="sm:inline hidden">Preview</span>
                <span className="sm:hidden inline"><Eye size={16} /></span>
            </Button>
        </div>
    )
}