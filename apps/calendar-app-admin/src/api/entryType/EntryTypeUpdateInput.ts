import { TimeEntryUpdateManyWithoutEntryTypesInput } from "./TimeEntryUpdateManyWithoutEntryTypesInput";

export type EntryTypeUpdateInput = {
  description?: string | null;
  name?: string | null;
  timeEntries?: TimeEntryUpdateManyWithoutEntryTypesInput;
};
