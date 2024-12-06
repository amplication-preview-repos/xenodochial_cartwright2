import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetCreateInput = {
  totalAmount?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  period?: "Option1" | null;
};
