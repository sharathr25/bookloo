import mongoose from "mongoose";
import { MONGO } from "../config";

const { URL, DB } = MONGO;
export class Db {
  static async connet(): Promise<undefined> {
    mongoose.connect(`${URL}/${DB}`);
  }
}
