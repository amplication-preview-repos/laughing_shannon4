import { CalendarListRelationFilter } from "../calendar/CalendarListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TimeEntryListRelationFilter } from "../timeEntry/TimeEntryListRelationFilter";

export type UserWhereInput = {
  calendars?: CalendarListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  timeEntries?: TimeEntryListRelationFilter;
  username?: StringFilter;
};
