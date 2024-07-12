import { PlaidIntegration as TPlaidIntegration } from "../api/plaidIntegration/PlaidIntegration";

export const PLAIDINTEGRATION_TITLE_FIELD = "id";

export const PlaidIntegrationTitle = (record: TPlaidIntegration): string => {
  return record.id?.toString() || String(record.id);
};
