import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaidIntegrationCreateInput = {
  itemId?: string | null;
  institutionName?: string | null;
  accessToken?: string | null;
  user?: UserWhereUniqueInput | null;
};
