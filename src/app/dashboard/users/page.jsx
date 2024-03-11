import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { fetchUsers } from "@/app/lib/data";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import PaginationComponent from "@/app/ui/dashboard/pagination/pagination";
import AvatarInput from "@/app/ui/dashboard/avatarUpload/avatarUpload";
import { addUser, deleteUser, updateUser } from "@/app/lib/actions";
import { Badge } from "@/components/ui/badge"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import DeleteUserForm from "@/app/ui/dashboard/deleteUser/deleteUserForm";
import UpdatePasswordForm from "@/app/ui/dashboard/updatePassword/updatePassword";



const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="h-screen ">
      {/* <header className="bg-white shadow lg:fixed top-0 left-0 right-0 lg:ml-[256px] z-10 lg:pt-0 pt-[60px]">
        <div className="px-4 py-6 sm:px-12 flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Users
          </h1>

          <div className="flex gap-2 items-center  ">
            <Search />

              <Link href="/dashboard/users/add" className="bg-[#523EF3] text-nowrap text-xs rounded px-3 py-2  text-white h-[38px] hover:bg-[#4633DE] flex items-center">
                  <div className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 13.36 13.36"
                    >
                      <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.3"
                        d="M.65 6.68h12.06M6.68.65v12.06"
                        data-name="plus-large-svgrepo-com (2)"
                      ></path>
                    </svg>
                  </div>
                  Add User
                </Link>

                
              
          </div>
        </div>
      </header> */}
      <div className="lg:pt-[86px] lg:h-full h-[83vh] flex  flex-col p- ">
      <div className=" w-full">
        <div className="px-4 py-6 sm:px-12">
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px">Name</TableHead>
                <TableHead className="hidden lg:table-cell">Email</TableHead>
                <TableHead >Roles</TableHead>
                <TableHead className="hidden lg:table-cell">
                  Created At
                </TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id} className="">
                  <TableCell className="lg:flex items-center gap-2">
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt=""
                      width={50}
                      height={50}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover border aspect-w-1 aspect-h-1 hidden lg:block rounded-full"
                    />
                    {user.name}
                  </TableCell>
                  <TableCell className="no-underline hidden lg:table-cell text-dec">
                    {user.email}
                  </TableCell>
                  <TableCell className=" font-normal">
                    
                    <Badge variant={user.isAdmin ? "admin" : "client"}>{user.isAdmin ? "Admin" : "Client"}</Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {user.createdAt ? user.createdAt.toString().slice(4, 16) : "N/A"}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-end">
                      <div className="relative ml-3 flex w-10 align-end">
                        <div>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button className="text-dark hover:bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-2 py-1.5">
                                <span className="text-md">...</span>
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="text-sm ">
                              <Link
                                href={`/dashboard/users/${user._id}`}
                                className="inline-block py-1.5 w-full px-5 text-sm border-none text-black hover:text-black hover:bg-gray-50 font-medium text-left"
                              >
                                Edit
                              </Link>
                              <Dialog>
      <DialogTrigger asChild>
                              <button className="inline-block py-1.5 w-full px-5 text-sm border-none text-black hover:text-black hover:bg-gray-50 font-medium text-left">
                                Update Password
                              </button></DialogTrigger>
                              <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Update password</DialogTitle>
          <DialogDescription>
          {'Update the password for this user here. Click save when you\'re done.'}
          </DialogDescription>
        </DialogHeader>
       <UpdatePasswordForm id={user._id.toString()}/>
      </DialogContent>
    </Dialog>
                              <button className="inline-block py-1.5 w-full px-5 text-sm border-none text-black hover:text-black hover:bg-gray-50 font-medium text-left">
                                Manage Role
                              </button>

                              <AlertDialog>
                              <AlertDialogTrigger asChild>
                              <button className="inline-block py-1.5 w-full px-5 text-sm border-none text-black hover:text-black hover:bg-gray-50 font-medium text-left"> Delete
                              </button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    {'This action cannot be undone. This will permanently delete this user and remove it\'s data from our servers.'}
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  {/* <AlertDialogAction> */}
                                 <DeleteUserForm userId={user.id.toString()}/>
                                    
                                    {/* </AlertDialogAction> */}
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>


                            
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="">
            <PaginationComponent count={count} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UsersPage;
