import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaidIntegrationWhereInput = {
  id?: StringFilter;
  itemId?: StringNullableFilter;
  institutionName?: StringNullableFilter;
  accessToken?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
