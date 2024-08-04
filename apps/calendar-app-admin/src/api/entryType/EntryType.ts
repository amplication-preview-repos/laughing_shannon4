import { TimeEntry } from "../timeEntry/TimeEntry";

export type EntryType = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  timeEntries?: Array<TimeEntry>;
  updatedAt: Date;
};
