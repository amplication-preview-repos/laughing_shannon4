import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TimeEntryListRelationFilter } from "../timeEntry/TimeEntryListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  timeEntries?: TimeEntryListRelationFilter;
  user?: UserWhereUniqueInput;
};
