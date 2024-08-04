import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CALENDAR_TITLE_FIELD } from "../calendar/CalendarTitle";
import { ENTRYTYPE_TITLE_FIELD } from "../entryType/EntryTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TimeEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
