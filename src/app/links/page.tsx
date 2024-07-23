import Header from "@/components/header/header";
import Image from "next/image";

export default function Links() {
    return (
        <>
        <Header />
        <div className="flex flex-wrap ">
            <div className="md:w-[40%] min-h-screen flex items-center justify-center px-[10%]">

                <div className="relative w-[308px] h-[632px] bg-cover p-[60px_20px]">
                    <Image src="/images/phone.svg" alt="preview-phone" width={308} height={632} className="absolute top-0 left-0 z-[-1]" />

                    <div className="flex flex-col items-center gap-6 w-full h-full">
                        <div className={`bg-[#EEEEEE] rounded-full w-[100px] h-[100px]`} >
                        </div>

                        <p className="bg-[#EEEEEE] rounded-[32px] h-[16px] w-[160px]"></p>
                        <p className="bg-[#EEEEEE] rounded-[32px] h-[8px] w-[72px]"></p>

                        <div className="flex flex-col gap-5 py-12">
                            <p className="bg-[#EEEEEE] rounded-[8px] h-[44px] w-[237px]"></p>
                            <p className="bg-[#EEEEEE] rounded-[8px] h-[44px] w-[237px]"></p>
                            <p className="bg-[#EEEEEE] rounded-[8px] h-[44px] w-[237px]"></p>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="md:w-[60%]">
                    
            </div>
        </div>
        </>
    )
}