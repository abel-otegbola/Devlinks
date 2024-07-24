'use client'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { Envelope, LockKey } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="sm:w-[476px] w-full p-12">
                <div className="flex items-center justify-center mb-12">
                    <Image src="/images/logo-full.svg" width={150} height={30} alt="logo" />
                </div>

                <form className="flex flex-col gap-5">
                    <div>
                        <h1 className="font-bold xl:text-[32px]">Create account</h1>
                        <p className="mt-2 mb-6">Let&apos;s get you started sharing your links!</p>
                    </div>
                    
                    <Input name="email" label="Email address" type="email" error="Input field" placeholder="e.g alex@email.com" leftIcon={<Envelope weight="fill" size={24}/>}/>

                    <Input name="password" label="Create password" type="password" error="" placeholder="At least 8 characters" leftIcon={<LockKey weight="fill" size={24}/>}/>

                    <Input name="cpassword" label="Confirm password" type="password" error="" placeholder="At least 8 characters" leftIcon={<LockKey weight="fill" size={24}/>}/>

                    <p className="text-[12px] text-gray">Password must contain at least 8 characters</p>

                    <Button size="full">Create new account</Button>

                    <p className="text-center">Already have an account? <Link href={"/login"} className="text-primary">Login</Link></p>
                </form>
            </div>
        </div>
    )
}