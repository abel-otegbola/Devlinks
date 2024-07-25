'use client'
import { useState } from "react"
import { Dropdown } from "../dropdown/dropdown"
import Input from "../input/input"
import { GithubLogo } from "@phosphor-icons/react"

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
                onChange={(value) => {
                    if (value) {
                        () => setSelectedLink(value)
                    } else {
                        
                    }
                }}
                options={[{ id: 0, platform: "Github", icon: <GithubLogo /> }].map((item: any) => ({
                    icon: item.icon,
                    label: item.platform,
                    value: item.platform,
                }))}
            />
            <Input value="" onChange={() => {}} type="text" name="platform" label="Platform" error="" />
            
        </div>
    )
}