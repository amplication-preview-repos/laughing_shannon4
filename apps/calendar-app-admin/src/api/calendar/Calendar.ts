import { TimeEntry } from "../timeEntry/TimeEntry";
import { User } from "../user/User";

export type Calendar = {
  createdAt: Date;
  date: Date | null;
  id: string;
  timeEntries?: Array<TimeEntry>;
  updatedAt: Date;
  user?: User | null;
};
