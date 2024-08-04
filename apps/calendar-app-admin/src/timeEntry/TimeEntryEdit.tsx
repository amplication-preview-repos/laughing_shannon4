import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CalendarTitle } from "../calendar/CalendarTitle";
import { EntryTypeTitle } from "../entryType/EntryTypeTitle";
import { UserTitle } from "../user/UserTitle";

export const TimeEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="calendar.id"
          reference="Calendar"
          label="calendar"
        >
          <SelectInput optionText={CalendarTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="entryType.id"
          reference="EntryType"
          label="entryType"
        >
          <SelectInput optionText={EntryTypeTitle} />
        </ReferenceInput>
        <NumberInput label="hoursWorked" source="hoursWorked" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
