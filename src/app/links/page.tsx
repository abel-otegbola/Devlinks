import Button from "@/components/button/button";
import Header from "@/components/header/header";
import Input from "@/components/input/input";
import PreviewSkeleton from "@/components/previewSkeleton/previewSkeleton";
// import WelcomeScreen from "@/components/welcomeScreen/welcomeScreen";

export default function Links() {
    const links = [
        { id: 1, label: "github", link: "" }
    ]

    return (
        <div className="sm:p-4 bg-slate">
        <Header />
        <div className="flex flex-wrap gap-6 mt-6">

            <div className="md:w-[40%] sm:flex hidden min-h-screen items-center justify-center bg-white rounded-[8px]">
                <PreviewSkeleton />
            </div>
            
            <div className="flex-1 bg-white rounded-[8px] min-h-screen p-[40px]">

                <div className="mb-10">
                    <h1 className="text-[32px] mb-6 font-bold">Customize your links</h1>
                    <p>Add/edit/remove links below and then share all your profiles with the world!</p>
                </div>
                <Button variant="secondary" size="full">+ Add new link</Button>

                {/* <WelcomeScreen /> */}

                <div className="py-6">
                    {
                        links.map((link:any) => (
                            <div key={link.id} className="bg-slate flex gap-4 flex-col p-5">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg"> = Link #{link.id}</span>
                                    <button>Remove</button>
                                </div>
                                <Input type="text" name="platform" label="Platform" error="" />
                                <Input type="text" name="link" label="Link" error="" />
                            </div>
                        ))
                    }
                </div>
                
                <div className="flex justify-end">
                    <Button disabled={true} >Save</Button>
                </div>
            </div>

        </div>
        </div>
    )
}