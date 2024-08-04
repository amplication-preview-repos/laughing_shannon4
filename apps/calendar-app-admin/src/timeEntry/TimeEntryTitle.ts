import { TimeEntry as TTimeEntry } from "../api/timeEntry/TimeEntry";

export const TIMEENTRY_TITLE_FIELD = "id";

export const TimeEntryTitle = (record: TTimeEntry): string => {
  return record.id?.toString() || String(record.id);
};
