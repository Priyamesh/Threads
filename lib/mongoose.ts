import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGOOSE_URL) {
    return console.log("MONGOOSE_URL not found");
  }

  if (isConnected) {
    return console.log("Already connected to database(MongoDB)");
  }

  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    isConnected = true;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
