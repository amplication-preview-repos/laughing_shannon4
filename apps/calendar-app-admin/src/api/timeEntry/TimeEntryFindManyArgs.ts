import { TimeEntryWhereInput } from "./TimeEntryWhereInput";
import { TimeEntryOrderByInput } from "./TimeEntryOrderByInput";

export type TimeEntryFindManyArgs = {
  where?: TimeEntryWhereInput;
  orderBy?: Array<TimeEntryOrderByInput>;
  skip?: number;
  take?: number;
};
