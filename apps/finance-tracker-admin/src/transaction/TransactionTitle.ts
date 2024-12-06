import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "category";

export const TransactionTitle = (record: TTransaction): string => {
  return record.category?.toString() || String(record.id);
};
