'use client'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { Envelope, LockKey, Spinner } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react"

export default function Homepage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn, loading } = useContext<any>(AuthContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn(email, password)
  }

    return (
        <div className="min-h-screen flex sm:items-center justify-center">
            <div className="sm:w-[476px] w-full p-12">
                <div className="flex items-center justify-center mb-12">
                    <Image src="/images/logo-full.svg" width={150} height={30} alt="logo" />
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <h1 className="font-bold xl:text-[32px]">Login</h1>
                        <p className="mt-2 mb-6">Add your details below to get back into the app</p>
                    </div>
                    
                    <Input name="email" label="Email address" type="email" value={email} onChange={setEmail} error={""} placeholder="Enter your email address" leftIcon={<Envelope weight="fill" size={24}/>}/>

                    <Input name="password" label="password" type="password" value={password} onChange={setPassword} error={""} placeholder="Enter your password" leftIcon={<LockKey weight="fill" size={24}/>}/>

                    <Button size="full">{ loading ? <Spinner size={16} className="animate-spin" /> : "Login"}</Button>
                    
                    <p className="text-center">Don&apos;t have an account? <Link href={"/register"} className="text-primary">Create account</Link></p>
                </form>
            </div>
        </div>
    )
}