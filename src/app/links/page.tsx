'use client'
import Button from "@/components/button/button";
import Header from "@/components/header/header";
import LinkCard from "@/components/linkCard/linkCard";
import PreviewSkeleton from "@/components/previewSkeleton/previewSkeleton";
import { LinksContext } from "@/context/linksContext";
import { AuthContext } from "@/context/useAuth";
import { Spinner } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { uuid } from "uuidv4";
// import WelcomeScreen from "@/components/welcomeScreen/welcomeScreen";

export interface userlink {
    id: string;
    platform: string;
    href: string;
}

export default function Links() {
    const { links, addLinks, updateLinks, loading } = useContext(LinksContext)
    const [editLinks, setEditLinks] = useState<userlink[]>(links?.list || []) 
    const {user} = useContext<any>(AuthContext)

    const addNewLink = () => {
        setEditLinks([ ...editLinks, { id: uuid(), platform: "", href: "" } ])
    }

    const editNewLink = (id: string, platform: string, href: string ) => {
        setEditLinks(editLinks?.map((item: any) => {
            if(item.id === id) {
                return { id: item.id, platform, href }
            }
            else return item
        }
        ))
    }

    const deleteLink = (id: string) => {
        setEditLinks(editLinks.filter(item => item.id !== id))
    }

    const submitProfile = () => {
        links.length === 0 ? addLinks({ id: uuid(), user: user.email, ...links, list: editLinks }) : updateLinks(links?.id, { ...links, list: editLinks })
    }

    return (
        <div className="sm:p-4 bg-slate">
        <Header />
        <div className="flex flex-wrap gap-6 mt-6">

            <div className="md:w-[40%] sm:flex h-screen hidden sticky top-12 left-0 justify-center bg-white rounded-[8px]">
                <PreviewSkeleton links={editLinks}/>
            </div>
            
            <div className="flex-1 bg-white rounded-[8px] min-h-screen p-[40px]">

                <div className="mb-10">
                    <h1 className="text-[32px] mb-6 font-bold">Customize your links</h1>
                    <p>Add/edit/remove links below and then share all your profiles with the world!</p>
                </div>

                <div onClick={addNewLink}>
                    <Button variant="secondary" size="full">+ Add new link</Button>
                </div>

                {/* <WelcomeScreen /> */}

                <div className="flex flex-col gap-6 py-6">
                    {
                        editLinks?.map((item: userlink, i: number) => (
                            <LinkCard key={item.id} link={item} edit={editNewLink} i={i} deleteLink={deleteLink}/>
                        ))
                    }
                </div>
                
                <div className="flex justify-end p-[40px] border border-transparent border-t-gray mt-[80px]"  onClick={submitProfile}>
                    <Button disabled={editLinks?.length === 0}>{loading ? <Spinner size={18} className="animate-spin" /> : "Save"}</Button>
                </div>
            </div>

        </div>
        </div>
    )
}
