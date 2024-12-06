import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balance?: number | null;
  typeField?: "Option1" | null;
  institution?: string | null;
  user?: UserWhereUniqueInput | null;
  name?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
