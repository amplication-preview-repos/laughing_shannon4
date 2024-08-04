import { TimeEntryUpdateManyWithoutCalendarsInput } from "./TimeEntryUpdateManyWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarUpdateInput = {
  date?: Date | null;
  timeEntries?: TimeEntryUpdateManyWithoutCalendarsInput;
  user?: UserWhereUniqueInput | null;
};
