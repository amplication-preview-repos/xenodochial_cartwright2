import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balance?: number | null;
  typeField?: "Option1" | null;
  institution?: string | null;
  user?: UserWhereUniqueInput | null;
  name?: string | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
