import { User, Portfolio, Message,Tutor, Enquiry, Product } from "./models"
import { connectToDB } from "./utils";

// <--- Users Start --->

export const fetchUsers = async (q,page) => {

    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 3
    // await new Promise(resolve => setTimeout(resolve, 5000))

    try {
        connectToDB()
        const count = await User.find({ name: { $regex: regex } }).count();
        const users = await User.find({
          $or: [
           {name: { $regex: regex } },
           {username: { $regex: regex } },
           {email: { $regex: regex } },
          ]
          }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,users}
    } catch (err) {
        throw new Error("Failed to fetch users!")
    }
}


export const fetchUser = async (id) => {
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      throw new Error("Failed to fetch user!");
    }
  };


// <--- Users End --->


// <--- Portfolio Start --->

export const fetchPortfolios = async (q,page) => {

  const regex = new RegExp(q, "i")

  const ITEM_PER_PAGE = 9
  // await new Promise(resolve => setTimeout(resolve, 5000))

  try {
      connectToDB()
      const count = await Portfolio.find({ projectName: { $regex: regex } }).count();
      const portfolios = await Portfolio.find({
        $or: [
          { projectName: { $regex: regex } },
          { category: { $regex: regex } },
          { clientName: { $regex: regex } },
          { technologiesUsed: { $regex: regex } },
        ]
      }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));

      return {count,portfolios}
  } catch (err) {
      throw new Error("Failed to fetch portfolios!")
  }
}




export const fetchPortfolio = async (id) => {
  try {
    connectToDB();
    const portfolio = await Portfolio.findById(id);
    return portfolio;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
};

// <--- Portfolio End --->

// <--- Message Start --->

export const fetchMessages = async (q,page) => {

  const regex = new RegExp(q, "i")

  const ITEM_PER_PAGE = 999999
  // await new Promise(resolve => setTimeout(resolve, 5000))

  try {
      connectToDB()
      const options = {
        sort: { createdAt: -1 }, // Sort by createdAt field in descending order
    };
      const count = await Message.find({ name: { $regex: regex } }).count();
      const messages = await Message.find({
        $or: [
          { name: { $regex: regex } },
          { subject: { $regex: regex } },
          { email: { $regex: regex } },
          // { contactNo: { $regex: regex } },
        ]
      // }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    },null,options).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));

      return {count,messages}
  } catch (err) {
      throw new Error(err,"Failed to fetch contacts!")
  }
}

export const fetchMessage = async (id) => {
  try {
    connectToDB();
    const message = await Message.findById(id);
    return message;
  } catch (err) {
    throw new Error("Failed to fetch message!");
  }
};



// <--- Message Start --->



// <--- Tutors Start --->

export const fetchTutors = async (q,page) => {

  const regex = new RegExp(q, "i")

  const ITEM_PER_PAGE = 3
  // await new Promise(resolve => setTimeout(resolve, 5000))

  try {
      connectToDB()
      const count = await Tutor.find({ name: { $regex: regex } }).count();
      const tutors = await Tutor.find({
        $or: [
         {name: { $regex: regex } },
         {username: { $regex: regex } },
         {email: { $regex: regex } },
         {city: { $regex: regex } },
         {qualification: { $regex: regex } },
         {tutorType: { $regex: regex } },
         {'subjects.subject' : { $regex: regex } },
        ]
        }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
      return {count,tutors}
  } catch (err) {
      throw new Error("Failed to fetch tutors!")
  }
}

export const fetchTutor = async (id) => {
  try {
    connectToDB();
    const tutor = await Tutor.findById(id);
    return tutor;
  } catch (err) {
    throw new Error("Failed to fetch tutor!");
  }
};


export const fetchClientTutors = async (q, page, tutorType) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 8;

  try {
      await connectToDB();
      const filter = {
          $or: [
              { name: { $regex: regex } },
              { username: { $regex: regex } },
              { email: { $regex: regex } },
              { city: { $regex: regex } },
              { qualification: { $regex: regex } },
              { tutorType: { $regex: regex } },
              { 'subjects.subject': { $regex: regex } },
          ],
      };
      if (tutorType) {
          filter.tutorType = tutorType;
      }
      const count = await Tutor.find(filter).count();
      const tutors = await Tutor.find(filter).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
      return { count, tutors };
  } catch (err) {
      throw new Error("Failed to fetch tutors!");
  }
};




// <--- Products Start --->

export const fetchProducts = async (q,page) => {

  const regex = new RegExp(q, "i")

  const ITEM_PER_PAGE = 9
  // await new Promise(resolve => setTimeout(resolve, 5000))

  try {
      connectToDB()
      const count = await Product.find({ name: { $regex: regex } }).count();
      const products = await Product.find({
        $or: [
          { name: { $regex: regex } },
          { category: { $regex: regex } },
          { description: { $regex: regex } },
        ]
      }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));

      return {count,products}
  } catch (err) {
      throw new Error("Failed to fetch products!")
  }
}




export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    throw new Error("Failed to fetch product!");
  }
};

// <--- products End --->


// <--- Enquiry Start --->

export const fetchEnquiries = async (q,page) => {

  const regex = new RegExp(q, "i")

  const ITEM_PER_PAGE = 999999
  // await new Promise(resolve => setTimeout(resolve, 5000))

  try {
      connectToDB()
      const options = {
        sort: { createdAt: -1 }, // Sort by createdAt field in descending order
    };
      const count = await Enquiry.find({ name: { $regex: regex } }).count();
      const enquiries = await Enquiry.find({
        $or: [
          { name: { $regex: regex } },
          // { contactNo: { $regex: regex } },
          { tutorType: { $regex: regex } },
          // { contactNo: { $regex: regex } },
        ]
      // }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    },null,options).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));

      return {count,enquiries}
  } catch (err) {
      throw new Error(err,"Failed to fetch enquiries!")
  }
}