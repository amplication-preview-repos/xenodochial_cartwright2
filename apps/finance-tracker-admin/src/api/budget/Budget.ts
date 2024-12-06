import { User } from "../user/User";

export type Budget = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  startDate: Date | null;
  endDate: Date | null;
  user?: User | null;
  period?: "Option1" | null;
};
