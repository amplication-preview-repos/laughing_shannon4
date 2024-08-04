import { Calendar } from "../calendar/Calendar";
import { JsonValue } from "type-fest";
import { TimeEntry } from "../timeEntry/TimeEntry";

export type User = {
  calendars?: Array<Calendar>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  timeEntries?: Array<TimeEntry>;
  updatedAt: Date;
  username: string;
};
