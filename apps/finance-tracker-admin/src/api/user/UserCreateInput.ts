import { InputJsonValue } from "../../types";
import { BudgetCreateNestedManyWithoutUsersInput } from "./BudgetCreateNestedManyWithoutUsersInput";
import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { PlaidIntegrationCreateNestedManyWithoutUsersInput } from "./PlaidIntegrationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  budgets?: BudgetCreateNestedManyWithoutUsersInput;
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  plaidIntegrations?: PlaidIntegrationCreateNestedManyWithoutUsersInput;
};
