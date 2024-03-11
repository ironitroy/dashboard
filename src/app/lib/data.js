import { User } from "./models"
import { connectToDB } from "./utils";

export const fetchUsers = async (q,page) => {

    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 8

    try {
        connectToDB()
        const count = await User.find({ name: { $regex: regex } }).count();
        const users = await User.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,users}
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}


export const fetchUser = async (id) => {
    console.log(id);
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };