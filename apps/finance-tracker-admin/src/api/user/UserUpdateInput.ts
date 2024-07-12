import { InputJsonValue } from "../../types";
import { BudgetUpdateManyWithoutUsersInput } from "./BudgetUpdateManyWithoutUsersInput";
import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { PlaidIntegrationUpdateManyWithoutUsersInput } from "./PlaidIntegrationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  budgets?: BudgetUpdateManyWithoutUsersInput;
  accounts?: AccountUpdateManyWithoutUsersInput;
  plaidIntegrations?: PlaidIntegrationUpdateManyWithoutUsersInput;
};
