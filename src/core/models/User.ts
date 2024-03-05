import { RoleEnum } from "./RoleEnum";

export type User = {
  id: string;
  name: string;
  email: string;
  role: RoleEnum;
  pic: string;
};
