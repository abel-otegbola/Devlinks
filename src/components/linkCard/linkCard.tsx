'use client'
import { useState } from "react"
import Input from "../input/input"
import { GithubLogo } from "@phosphor-icons/react"
import Dropdown from "../dropdown/dropdown"

export default function LinkCard({ link, i, deleteLink }: any) {
    const [selectedLink, setSelectedLink] = useState<any>()

    return (
        <div className="bg-slate flex gap-4 flex-col p-5 border border-gray/[0.3] rounded-[8px]">
            <div className="flex justify-between items-center">
                <span className="font-bold text-lg"> = Link #{i+1}</span>
                <button onClick={() => deleteLink(link.id)}>Remove</button>
            </div>
            <Dropdown
                placeholder="Platform"
                value={selectedLink || ""}
                name="dropdown"
                onChange={() => {}}
                error=""
                options={[{ id: 0, platform: "Github", icon: <GithubLogo /> }]}
            />
            <Input value="" onChange={() => {}} type="text" name="platform" label="Platform" error="" />
            
        </div>
    )
}