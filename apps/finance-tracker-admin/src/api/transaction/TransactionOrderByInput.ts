import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  category?: SortOrder;
  description?: SortOrder;
  accountId?: SortOrder;
  amount?: SortOrder;
  date?: SortOrder;
  typeField?: SortOrder;
};
