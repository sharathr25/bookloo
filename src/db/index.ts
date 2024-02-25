import mongoose from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1:27017";
const DB = "bookloo";

export class Db {
  static async connet(): Promise<undefined> {
    mongoose.connect(`${MONGO_URL}/${DB}`);
  }
}
