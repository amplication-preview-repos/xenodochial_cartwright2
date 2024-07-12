import { User } from "../user/User";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  balance: number | null;
  typeField?: "Option1" | null;
  institution: string | null;
  user?: User | null;
  name: string | null;
  transactions?: Array<Transaction>;
};
