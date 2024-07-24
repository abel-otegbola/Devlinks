'use client'

import { ArrowRight, DiscordLogo, FacebookLogo, GithubLogo, LinkedinLogo, PinterestLogo, RedditLogo, TumblrLogo, TwitchLogo, WhatsappLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { ReactElement } from "react";


export default function SocialLink({ label, href }: {label: string, href: string}) {

    const socials: Record<string, ReactElement> = {
        github: <GithubLogo />,
        youtube: <YoutubeLogo />,
        linkedin: <LinkedinLogo /> ,
        facebook: <FacebookLogo /> ,
        x: <XLogo />,
        pinterest: <PinterestLogo /> ,
        whatsapp: <WhatsappLogo /> ,
        tumblr: <TumblrLogo /> ,
        reddit: <RedditLogo /> ,
        twitch: <TwitchLogo /> ,
        discord: <DiscordLogo /> ,
    }

    const colors: Record<string, string> = {
        "github": "#1A1A1A",
        "youtube": "#EE3939",
        "linkedin": "#2D68FF",
        "facebook": "#1877F2",
        "x": "#000000",
        "pinterest": "#BD081C",
        "whatsapp": "#075E54",
        "tumblr": "#35465D",
        "reddit": "#FF4500",
        "twitch": "#9146FF",
        "discord": "5865F2",
    }

    return (
        <Link href={href} className={`flex items-center justify-between gap-2 relative rounded-[8px] h-[44px] p-[11px_16px] border border-gray duration-500 text-white
            `}
            style={{ backgroundColor: colors[label] }}
        >
            <div className="flex items-center gap-2">
                <span>{ socials[label] }</span>
                <span className="capitalize">{ label }</span>
            </div>
            <ArrowRight />
        </Link>
    )
}
            