import { CalendarCreateNestedManyWithoutUsersInput } from "./CalendarCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TimeEntryCreateNestedManyWithoutUsersInput } from "./TimeEntryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  calendars?: CalendarCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  timeEntries?: TimeEntryCreateNestedManyWithoutUsersInput;
  username: string;
};
