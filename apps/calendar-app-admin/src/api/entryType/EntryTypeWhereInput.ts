import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TimeEntryListRelationFilter } from "../timeEntry/TimeEntryListRelationFilter";

export type EntryTypeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  timeEntries?: TimeEntryListRelationFilter;
};
