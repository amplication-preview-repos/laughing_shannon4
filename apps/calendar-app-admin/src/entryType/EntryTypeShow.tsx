import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CALENDAR_TITLE_FIELD } from "../calendar/CalendarTitle";
import { ENTRYTYPE_TITLE_FIELD } from "./EntryTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EntryTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TimeEntry"
          target="entryTypeId"
          label="TimeEntries"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="calendar"
              source="calendar.id"
              reference="Calendar"
            >
              <TextField source={CALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="entryType"
              source="entrytype.id"
              reference="EntryType"
            >
              <TextField source={ENTRYTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="hoursWorked" source="hoursWorked" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
