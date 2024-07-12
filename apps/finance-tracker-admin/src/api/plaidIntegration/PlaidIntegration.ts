import { User } from "../user/User";

export type PlaidIntegration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemId: string | null;
  institutionName: string | null;
  accessToken: string | null;
  user?: User | null;
};
