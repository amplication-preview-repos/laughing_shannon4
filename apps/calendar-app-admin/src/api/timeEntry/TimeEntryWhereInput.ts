import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntryTypeWhereUniqueInput } from "../entryType/EntryTypeWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TimeEntryWhereInput = {
  calendar?: CalendarWhereUniqueInput;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  entryType?: EntryTypeWhereUniqueInput;
  hoursWorked?: FloatNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
