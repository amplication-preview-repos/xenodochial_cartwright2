import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionUpdateInput = {
  category?: string | null;
  description?: string | null;
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  date?: Date | null;
  typeField?: "Option1" | null;
};
