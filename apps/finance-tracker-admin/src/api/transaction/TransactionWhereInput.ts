import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  id?: StringFilter;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  typeField?: "Option1";
};
