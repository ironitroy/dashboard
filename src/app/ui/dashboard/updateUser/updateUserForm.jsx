"use client"

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateUser } from "@/app/lib/actions";

import { useToast } from "@/components/ui/use-toast"
import { redirect } from "next/navigation";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { getCurrentTime } from '@/app/lib/utils';
import AvatarInput from "../avatarUpload/avatarUpload";

const UpdateUserForm = ({user}) => {

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
            title: <div className="flex gap-2 items-center"><IoIosCheckmarkCircleOutline className="text-2xl"/>Bingo! User updated successfully!</div>,
          description: getCurrentTime(),
              });
              redirect("/dashboard/users");
        }
    }}>
      <header className="bg-white shadow lg:fixed top-0 left-0 right-0 lg:ml-[256px] z-10 lg:pt-0 pt-[60px]">
        <div class="px-4 py-6 sm:px-12 flex flex-row justify-between items-center">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900">Edit User Information</h1>
          <button type="submit" class="bg-[#523EF3] text-nowrap text-xs rounded px-3 py-2  text-white h-[38px] hover:bg-[#4633DE] flex items-center">
            Save Changes
          </button>
        </div>
      </header>

      <div className="lg:pt-[86px] lg:h-full  p-3 flex justify-center items-center flex-col ">
        <div className="grid grid-cols- md:grid-cols-4 gap-6 w-full px-4 py-6 sm:p-12 bg-slate-40">
          {/* <Image
            src="/noavatar.png"
            alt=""
            width={200}
            height={200}
            className="border rounded-3xl mb-6 lg:mb-0  outline outline-2 outline-indigo-500 outline-offset-8 grid justify-self-center self-center object-cover"
          /> */}

          <AvatarInput className="h-36 w-36"/>

          <div className=" col-span-1 md:col-span-3 grid sm:grid-cols-2 gap-6">
          <input type="hidden" name="id" value={user._id}/>
            <div className="grid col-span-1  items-center gap-2">
              <Label htmlFor="username" className="text-left">
                Username:
              </Label>
              <Input name="username" className="" placeholder={user.username} />
            </div>
            <div className="grid col-span-1  items-center gap-2">
              <Label htmlFor="name" className="text-left">
                Full Name:
              </Label>
              <Input name="name" className="" placeholder={user.name} />
            </div>
            <div className="grid col-span-1 items-center gap-2">
              <Label htmlFor="username" className="text-left">
                Email:
              </Label>
              <Input
                name="email"
                type="email"
                className=""
                placeholder={user.email}
              />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="phone" className="text-left">
                Phone No.:
              </Label>
              <Input
                name="phone"
                type="tel"
                className=""
                placeholder={user.phone}
              />
            </div>
            <div className="grid items-center col-span-full gap-2">
              <Label htmlFor="address" className="text-left">
                Address:
              </Label>
              <Textarea
                name="address"
                className=""
                placeholder={user.address}
                type="textarea"
              />
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default UpdateUserForm