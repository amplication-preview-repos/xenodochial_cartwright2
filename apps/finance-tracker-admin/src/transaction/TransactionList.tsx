import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="category" source="category" />
        <TextField label="description" source="description" />
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="amount" source="amount" />
        <TextField label="date" source="date" />
        <TextField label="type" source="typeField" />
      </Datagrid>
    </List>
  );
};
