"use server";
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { signIn } from "../auth";


export const addUser = async (formData) => {
  const { username, name, email, phone, address, isAdmin, password } =
    Object.fromEntries(formData);
  console.log(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      name,
      email,
      phone,
      address,
      isAdmin,
      password: hashedPassword,
    });

    await newUser.save();
    // return { success: true, message: "User created successfully" }
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to create user!")
    return {
      err: "There was a problem creating this user!",
    };
  }
  revalidatePath("/dashboard/users");
};



export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDB();
      await User.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    //   throw new Error("Failed to delete user!");
    return {
        err: "There was a problem deleting this user!",
      };
    }
  
    revalidatePath("/dashboard/users");
  };
  

  export const updateUser = async (formData) => {
    const { id, username, name, email, phone, address, password  } =
      Object.fromEntries(formData);
    
    try {
      console.log(id)

      connectToDB();
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const updateFields = {
        username,
        name,
        email,
        phone,
        address,
        password: hashedPassword,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
        
      await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      // throw new Error("Failed to update user!");
      return {
        err: "There was a problem updating this user!",
      };
    }

    revalidatePath("/dashboard/users");
    // redirect("/dashboard/users");
  };




  export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
      // return "Wrong Credentials";

      throw err;
    }
  };