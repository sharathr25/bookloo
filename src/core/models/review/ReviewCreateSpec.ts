import { ReviewedUser } from "./ReviewedUser";

export type ReviewCreateSpec = {
  rating: number;
  review: string;
  user: ReviewedUser;
  businessId: string;
};
