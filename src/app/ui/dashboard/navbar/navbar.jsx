import Image from "next/image";
import { auth, signOut } from "@/app/auth";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




const Navbar = async () => {


   const {user} = await auth();
  console.log(user);


  return (
    <div className="h-20 lg:fixed top-0 right-0 w-full outline-none bg-indig-50 shadow px-4 py-6 sm:px-12 z-10 lg:ml-[256px] flex justify-end items-center">
      <DropdownMenu>
  <DropdownMenuTrigger  className="focus:outline-none">
      <div className=" flex items-center gap-2 p-1 focus:outline-none hover:ring-indigo-200  hover:ring-2 ease-in-out duration-300 border border-indigo-300 rounded-full">
          <Image
            src={user.img || "/noavatar.png"}
            alt=""
            width="40"
            height="40"
            style={{
              width: "40px",
              height: "40px",
            }}
            className="object-cover  border rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-medium text-sm flex gap-2 items-center">{user.name} 
            </span>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>
            <IoIosArrowDown className="pr-2 text-2xl"/>
        </div>
        </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuSeparator />
    <form action={async () => {
      "use server";
      await signOut();
    }}>
      <button className="w-full">
    <DropdownMenuItem className="cursor-pointer">Log out</DropdownMenuItem></button>
    </form>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default Navbar