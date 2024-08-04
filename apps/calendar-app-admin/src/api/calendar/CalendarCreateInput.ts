import { TimeEntryCreateNestedManyWithoutCalendarsInput } from "./TimeEntryCreateNestedManyWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarCreateInput = {
  date?: Date | null;
  timeEntries?: TimeEntryCreateNestedManyWithoutCalendarsInput;
  user?: UserWhereUniqueInput | null;
};
