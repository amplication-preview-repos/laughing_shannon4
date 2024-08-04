import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { EntryTypeWhereUniqueInput } from "../entryType/EntryTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TimeEntryUpdateInput = {
  calendar?: CalendarWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  entryType?: EntryTypeWhereUniqueInput | null;
  hoursWorked?: number | null;
  user?: UserWhereUniqueInput | null;
};
