import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  balance?: SortOrder;
  typeField?: SortOrder;
  institution?: SortOrder;
  userId?: SortOrder;
  name?: SortOrder;
};
