import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetWhereInput = {
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  period?: "Option1";
};
