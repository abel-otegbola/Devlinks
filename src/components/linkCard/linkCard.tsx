'use client'
import { useEffect, useState } from "react"
import Input from "../input/input"
import { GithubLogo, GoogleLogo, InstagramLogo, WhatsappLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react"
import Dropdown from "../dropdown/dropdown"

export default function LinkCard({ link, i, edit, deleteLink }: any) {
    const [platform, setPlatform] = useState<string>()
    const [href, setHref] = useState<string | number>()

    useEffect(() => {
        edit(link.id, platform || "", href || "")
    }, [ platform, href ])

    return (
        <div className="bg-slate flex gap-4 flex-col p-5 border border-gray/[0.3] rounded-[8px]">
            <div className="flex justify-between items-center">
                <span className="font-bold text-lg"> = Link #{i+1}</span>
                <button onClick={() => deleteLink(link.id)}>Remove</button>
            </div>
            <Dropdown
                placeholder="Platform"
                value={platform || ""}
                name="dropdown"
                onChange={setPlatform}
                error=""
                options={[
                    { id: 0, platform: "Github", icon: <GithubLogo /> },
                    { id: 1, platform: "Youtube", icon: <YoutubeLogo /> },
                    { id: 2, platform: "Instagram", icon: <InstagramLogo /> },
                    { id: 3, platform: "Gmail", icon: <GoogleLogo /> },
                    { id: 4, platform: "X", icon: <XLogo /> },
                    { id: 5, platform: "Whatsapp", icon: <WhatsappLogo /> },
                ]}
            />
            <Input value={href || ""} onChange={setHref} type="text" name="href" label="Link" error="" />
            
        </div>
    )
}