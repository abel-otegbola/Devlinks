import Button from "@/components/button/button";
import Header from "@/components/header/header";
import PreviewSkeleton from "@/components/previewSkeleton/previewSkeleton";
import Image from "next/image";

export default function Links() {
    return (
        <div className="p-4 bg-slate">
        <Header />
        <div className="flex flex-wrap gap-6 mt-6">

            <div className="md:w-[40%] min-h-screen flex items-center justify-center bg-white rounded-[8px]">
                <PreviewSkeleton />
            </div>
            
            <div className="flex-1 bg-white rounded-[8px] p-[40px]">
                <div className="mb-10">
                    <h1 className="text-[32px] mb-6 font-bold">Customize your links</h1>
                    <p>Add/edit/remove links below and then share all your profiles with the world!</p>
                </div>
                <Button variant="secondary" size="full">+ Add new link</Button>

                <div className="flex flex-col justify-center items-center min-h-[400px] my-6 md:px-[25%] px-[5%] py-[60px] bg-slate">
                    <h1 className="text-[32px] mb-6 font-bold text-center">Let's get you started</h1>
                    <p className="text-center leading-[24px]">Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</p>

                </div>
                
                <div className="flex justify-end">
                    <Button disabled={true} >Save</Button>
                </div>
            </div>

        </div>
        </div>
    )
}