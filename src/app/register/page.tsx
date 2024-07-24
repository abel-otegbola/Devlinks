'use client'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { validateForm } from "@/utils/helpers/validateForm";
import { Envelope, LockKey, Spinner } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [errors, setErrors] = useState({ email: "", password: "", cpassword: "" })

    const { signUp, loading } = useContext<any>(AuthContext)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors({ email: "", password: "", cpassword: "" })
       
        const validate = validateForm(email, password, cpassword)

        if(validate === null) {
            signUp(email, password)
        }
        else {
            setErrors(validate)
        }
      
    }

    return (
        <div className="min-h-screen flex sm:items-center justify-center">
            <div className="sm:w-[476px] w-full p-12">
                <div className="flex items-center justify-center mb-12">
                    <Image src="/images/logo-full.svg" width={150} height={30} alt="logo" />
                </div>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div>
                        <h1 className="font-bold xl:text-[32px]">Create account</h1>
                        <p className="mt-2 mb-6">Let&apos;s get you started sharing your links!</p>
                    </div>
                    
                    <Input name="email" label="Email address" value={email} onChange={setEmail} type="email" error={errors.email} placeholder="e.g alex@email.com" leftIcon={<Envelope weight="fill" size={24}/>}/>

                    <Input name="password" label="Create password" value={password} onChange={setPassword} type={errors.password} error={errors.password} placeholder="At least 8 characters" leftIcon={<LockKey weight="fill" size={24}/>}/>

                    <Input name="cpassword" label="Confirm password" value={cpassword} onChange={setCpassword} type={errors.cpassword} error={errors.cpassword} placeholder="At least 8 characters" leftIcon={<LockKey weight="fill" size={24}/>}/>

                    <p className="text-[12px] text-gray">Password must contain at least 8 characters</p>

                    <Button size="full">{ loading ? <Spinner size={16} className="animate-spin" /> : "Create new account" }</Button>

                    <p className="text-center">Already have an account? <Link href={"/"} className="text-primary">Login</Link></p>
                </form>
            </div>
        </div>
    )
}