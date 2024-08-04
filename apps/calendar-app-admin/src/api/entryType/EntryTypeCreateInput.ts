import { TimeEntryCreateNestedManyWithoutEntryTypesInput } from "./TimeEntryCreateNestedManyWithoutEntryTypesInput";

export type EntryTypeCreateInput = {
  description?: string | null;
  name?: string | null;
  timeEntries?: TimeEntryCreateNestedManyWithoutEntryTypesInput;
};
