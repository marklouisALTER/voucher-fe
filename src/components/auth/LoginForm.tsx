import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from '@/schema/auth'
import { z } from 'zod'
import { Toaster, toast } from 'sonner'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LucideEye } from 'lucide-react'
import { Link } from 'react-router-dom'

export const LoginForm:React.FC = () => {

    const [isPasswordTextType, setIsPasswordTextType] = useState<boolean>(true)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
      })

      function onSubmit(values: z.infer<typeof loginSchema>) {
        toast.success("Login Successful", {
            description: "You have successfully logged in.",
            duration: 2000,
            });
      }

  return (
    <Form {...form}>
        <Toaster richColors position='top-center' />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 mt-10">
            <div className="grid gap-3">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                        <Input className='border border-gray-400 py-5 focus:border-0' id="email" type="email" placeholder="Enter your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <div className="relative grid gap-3">
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                        <Input className='border border-gray-400 py-5 focus:border-0' id="password" type={isPasswordTextType == true ? 'password': 'text'} placeholder="Enter your Password" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <div onClick={() => setIsPasswordTextType((prevState) => !prevState)}>
                    <LucideEye className="absolute right-3 top-[43px] transform -translate-y-1/2 cursor-pointer 
                    transition-all ease-in-out hover:text-brand-primary" />
            </div>
            </div>

            <div className="flex justify-between items-center">
                <Link
                to={"#"}
                className="text-sm hover:text-brand-primary transition-all ease-in-out cursor-pointer"
                >
                Forgot your password?
                </Link>
            </div>

            <Button 
                type="submit" 
                className="w-full font-primary font-semibold py-3 rounded-md flex items-center justify-center gap-2"
                disabled={form.formState.isSubmitting}
            >
                {form.formState.isSubmitting ? (
                <>
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                    Signing In...
                </>
                ) : (
                "Sign In"
                )}
            </Button>
            </div>
        </form>
    </Form>
  )
}
