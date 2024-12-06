import { PlaidIntegration as TPlaidIntegration } from "../api/plaidIntegration/PlaidIntegration";

export const PLAIDINTEGRATION_TITLE_FIELD = "institutionName";

export const PlaidIntegrationTitle = (record: TPlaidIntegration): string => {
  return record.institutionName?.toString() || String(record.id);
};
