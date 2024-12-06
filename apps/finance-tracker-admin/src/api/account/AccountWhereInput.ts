import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  balance?: FloatNullableFilter;
  typeField?: "Option1";
  institution?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  name?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
