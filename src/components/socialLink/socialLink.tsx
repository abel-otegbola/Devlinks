'use client'

import { ArrowRight, DiscordLogo, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, PinterestLogo, RedditLogo, TumblrLogo, TwitchLogo, WhatsappLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { ReactElement } from "react";


export default function SocialLink({ label, href }: any) {

    const socials: Record<string, ReactElement> = {
        Github: <GithubLogo />,
        Youtube: <YoutubeLogo />,
        Linkedin: <LinkedinLogo /> ,
        Instagram: <InstagramLogo /> ,
        Facebook: <FacebookLogo /> ,
        X: <XLogo />,
        Pinterest: <PinterestLogo /> ,
        Whatsapp: <WhatsappLogo /> ,
        Tumblr: <TumblrLogo /> ,
        Reddit: <RedditLogo /> ,
        Twitch: <TwitchLogo /> ,
        Discord: <DiscordLogo /> ,
    }

    const colors: Record<string, string> = {
        "Github": "#1A1A1A",
        "Youtube": "#EE3939",
        "Linkedin": "#2D68FF",
        "Facebook": "#1877F2",
        "Instagram": "#1833F2",
        "X": "#000000",
        "Pinterest": "#BD081C",
        "Whatsapp": "#075E54",
        "Tumblr": "#35465D",
        "Reddit": "#FF4500",
        "Twitch": "#9146FF",
        "Discord": "5865F2",
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
            