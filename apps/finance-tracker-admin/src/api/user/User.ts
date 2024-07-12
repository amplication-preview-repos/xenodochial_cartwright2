import { JsonValue } from "type-fest";
import { Budget } from "../budget/Budget";
import { Account } from "../account/Account";
import { PlaidIntegration } from "../plaidIntegration/PlaidIntegration";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  budgets?: Array<Budget>;
  accounts?: Array<Account>;
  plaidIntegrations?: Array<PlaidIntegration>;
};
