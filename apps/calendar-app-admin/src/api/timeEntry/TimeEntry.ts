import { Calendar } from "../calendar/Calendar";
import { EntryType } from "../entryType/EntryType";
import { User } from "../user/User";

export type TimeEntry = {
  calendar?: Calendar | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  entryType?: EntryType | null;
  hoursWorked: number | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
