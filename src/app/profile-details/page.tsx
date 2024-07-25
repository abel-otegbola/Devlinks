'use client'
import Button from "@/components/button/button";
import Header from "@/components/header/header";
import Input from "@/components/input/input";
import PreviewSkeleton from "@/components/previewSkeleton/previewSkeleton";
import { LinksContext } from "@/context/linksContext";
import { Image, Spinner } from "@phosphor-icons/react";
import { useContext, useState } from "react";

export interface userlink {
    id: string;
    platform: string;
    href: string;
}

export default function Links() {
    const { links, addLinks, updateLinks, loading } = useContext(LinksContext)
    const [newProfile, setNewProfile] = useState<any>(links?.profile) 

    const changeFirstname = (value: string) => {
        setNewProfile({ ...newProfile, firstname: value })
    }

    const changeLastname = (value: string) => {
        setNewProfile({ ...newProfile, lastname: value })
    }

    const changeEmail = (value: string) => {
        setNewProfile({ ...newProfile, email: value })
    }
    
    const submitProfile = () => {
        !links ? addLinks({ list: {}, profile: newProfile }) : updateLinks({ ...links, profile: { ...newProfile } })
    }

    return (
        <div className="sm:p-4 bg-slate">
        <Header />
        <div className="flex flex-wrap gap-6 mt-6">

            <div className="md:w-[40%] sm:flex hidden min-h-screen items-center justify-center bg-white rounded-[8px]">
                <PreviewSkeleton />
            </div>
            
            <div className="flex-1 bg-white rounded-[8px] min-h-screen p-[40px]">

                <div className="mb-10">
                    <h1 className="text-[32px] mb-6 font-bold">Profile Details</h1>
                    <p>Add your details to create a personal touch to your profile</p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-6 mb-6 bg-slate p-[40px]">
                    <p>Profile picture</p>
                    <div className="md:w-[60%] flex items-center flex-wrap gap-4">
                        <div className="flex flex-col items-center justify-center gap-6 text-primary w-[200px] w-[200px] py-[40px] rounded-[12px] bg-tetiary">
                            <Image size={40}/>
                            <button>+ Upload image</button>
                        </div>
                        <div className="text-[12px]">
                            <p>Image must be below 1024x1024px</p>  
                            <p>Use PNG or JPG format</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-6 bg-slate p-[8px_40px]">
                    <p>First name*</p>
                    <div className="md:w-[60%] flex items-center flex-wrap gap-4">
                        <Input label="" type="text" onChange={changeFirstname} name="firstname" value={newProfile?.firstname} error="" placeholder="e.g John" />
                    </div>
                </div>
                
                <div className="flex items-center justify-between flex-wrap gap-6 bg-slate p-[8px_40px]">
                    <p>Last name*</p>
                    <div className="md:w-[60%] flex items-center flex-wrap gap-4">
                        <Input label="" type="text" onChange={changeLastname} name="lastname" value={newProfile?.lastname} error="" placeholder="e.g Appleseed" />
                    </div>
                </div>
                
                <div className="flex items-center justify-between flex-wrap gap-6 bg-slate p-[8px_40px]">
                    <p>Email*</p>
                    <div className="md:w-[60%] flex items-center flex-wrap gap-4">
                        <Input label="" type="email" onChange={changeEmail} name="email" value={newProfile?.email} error="" placeholder="e.g email@example.com" />
                    </div>
                </div>
                
                <div className="flex justify-end p-[40px] border border-transparent border-t-gray mt-[80px]">
                    <div onClick={submitProfile}> 
                        <Button disabled={newProfile === null}>{loading ? <Spinner size={24} className="animate-spin" /> : "Save"}</Button>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}