import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="balance" source="balance" />
        <TextField label="type" source="typeField" />
        <TextField label="institution" source="institution" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <ReferenceManyField
          reference="Transaction"
          target="accountId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="category" source="category" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="amount" source="amount" />
            <TextField label="date" source="date" />
            <TextField label="type" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
