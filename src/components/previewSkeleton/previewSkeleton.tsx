import { userlink } from "@/app/profile-details/page";
import Image from "next/image";
import SocialLink from "../socialLink/socialLink";

export default function PreviewSkeleton({ links }: any) {
    return (
        <div className="relative w-[308px] h-[632px] bg-cover pt-[60px] p-[20px]">
            <Image src="/images/phone.svg" alt="preview-phone" width={308} height={632} className="absolute top-0 left-0 z-[3]" />

            <div className="relative flex flex-col items-center gap-6 w-full h-full z-[6] overflow-y-auto">
                <div className={`bg-[#EEEEEE] rounded-full mx-auto w-[100px] h-[100px]`} >
                </div>

                <p className="bg-[#EEEEEE] rounded-[32px] h-[16px] w-[60%]"></p>
                <p className="bg-[#EEEEEE] rounded-[32px] h-[8px] w-[30%]"></p>

                <div className="flex flex-col gap-5 py-12 px-4 w-full">
                    {
                        links?.map((link: userlink) => (
                            <SocialLink key={link.id} label={link.platform} href={link.href} />
                        ))
                    }
                    {
                        links.length < 5 ?
                        [...Array(5-links.length)].map((item: number) => (
                            <p className="bg-[#EEEEEE] rounded-[8px] h-[44px] w-full"></p>
                        ))
                        : 
                        ""
                    }
                </div>
            </div>
        </div>
    )
}