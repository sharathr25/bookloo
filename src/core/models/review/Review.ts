import { ReviewedUser } from "./ReviewedUser";

export type Review = {
  id: string;
  rating: number;
  review: string;
  user: ReviewedUser;
  businessId: string;
};
