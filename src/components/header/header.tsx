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
            <Image src="/images/logo-full.svg" width={150} height={30} alt="logo" className="md:w-[150px] w-[80px]" />

            <nav className="flex items-center">
                {
                    navTabs.map((tab: navTab) => (
                        <Tab key={tab.id} label={tab.label} to={tab.to} icon={tab.icon} />
                    ))
                }
            </nav>

            <Link href="/preview" className="bg-white text-primary focus:bg-tetiary hover:bg-tetiary/[0.8] border border-primary rounded-[8px] h-[40px] p-2 w-fit">
                <p className="sm:block hidden">Preview</p>
                <p className="sm:hidden block"><Eye size={20} /></p>
            </Link>
        </div>
    )
}