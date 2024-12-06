import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BudgetListRelationFilter } from "../budget/BudgetListRelationFilter";
import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { PlaidIntegrationListRelationFilter } from "../plaidIntegration/PlaidIntegrationListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  budgets?: BudgetListRelationFilter;
  accounts?: AccountListRelationFilter;
  plaidIntegrations?: PlaidIntegrationListRelationFilter;
};
