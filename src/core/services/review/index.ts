import { ReviewRepositoryImpl } from "../../../db/repositories/ReviewRepositoryImpl";
import { ReviewServiceImpl } from "./ReviewServiceImpl";

export const reviewService = new ReviewServiceImpl(new ReviewRepositoryImpl());
