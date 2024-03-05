import mongoose from "mongoose";

export const getMongoObjectId = (): string =>
  new mongoose.mongo.ObjectId().toString();
