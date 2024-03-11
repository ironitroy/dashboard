"use client"

import {
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/app/lib/actions";
import { useToast } from "@/components/ui/use-toast"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { getCurrentTime } from '@/app/lib/utils';
import { redirect } from "next/navigation";


const UpdatePasswordForm = ({id}) => {
    const { toast } = useToast()
  return (
    <div>
         <form action={async (formData) => {
        //client-side validation or some other things

        const result = await updateUser(formData);
        if(result?.err) {
            //show error
              toast({
                variant: "destructive",
                title: <div className="flex gap-2 items-center"><IoWarningOutline className="text-2xl"/>Uh oh! Something went wrong.</div>,
                description: result.err,
              })
        } else {
            toast({
                variant: "success2",
            title: <div className="flex gap-2 items-center"><IoIosCheckmarkCircleOutline className="text-2xl"/>Bingo! User password updated successfully!</div>,
          description: getCurrentTime(),
              });
              redirect("/dashboard/users");
        }
    }}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
          <input type="hidden" name="id" value={id}/>

            <Label htmlFor="password" className="text-left">
              Password
            </Label>
            <Input name="password" type="password" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirm-password" className="text-right text-nowrap">
              Confirm Password  
            </Label>
            <Input name="confirm-password" type="password" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
    </div>
  )
}

export default UpdatePasswordForm