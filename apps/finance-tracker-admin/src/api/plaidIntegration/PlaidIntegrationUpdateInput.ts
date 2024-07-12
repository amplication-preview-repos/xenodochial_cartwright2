import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaidIntegrationUpdateInput = {
  itemId?: string | null;
  institutionName?: string | null;
  accessToken?: string | null;
  user?: UserWhereUniqueInput | null;
};
