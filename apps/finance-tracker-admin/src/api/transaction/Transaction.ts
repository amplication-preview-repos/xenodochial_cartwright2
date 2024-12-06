import { Account } from "../account/Account";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  category: string | null;
  description: string | null;
  account?: Account | null;
  amount: number | null;
  date: Date | null;
  typeField?: "Option1" | null;
};
