import { SortOrder } from "../../util/SortOrder";

export type TimeEntryOrderByInput = {
  calendarId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  entryTypeId?: SortOrder;
  hoursWorked?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
