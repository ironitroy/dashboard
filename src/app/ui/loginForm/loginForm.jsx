"use client"
import { authenticate } from "@/app/lib/actions"
import { getCurrentTime } from "@/app/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { redirect } from "next/navigation";
import { useState } from "react"
import { useFormState } from "react-dom";

const LoginForm = () => {
  const { toast } = useToast();
  // const [err, setErr] = useState();
  const [state, formAction] = useFormState(authenticate, undefined);
 
  return (
    <div>
         <form action={formAction} className=" space-y-6 ">
          <div className="grid items-center gap-2">
            <Label htmlFor="username" className="text-left text-base leading-6">
              Username
            </Label>
            <Input name="username" type="text" className="col-span-3 text-base" />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="username" className="text-left text-base leading-6">
              Password
            </Label>
            <Input name="password"  type="password" className="col-span-3 text-base" />
          </div>
          <div class="h-5">
          {state && state}
          </div>
          <div className="">
            <Button type="submit" className="w-full text-base">Sign In</Button>
          </div>
          <div class="flex flex-row justify-end mb-8"><a class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-1" href="/auth/account-recovery">Forget password?</a></div>
          </form>
    </div>
  )
}

export default LoginForm