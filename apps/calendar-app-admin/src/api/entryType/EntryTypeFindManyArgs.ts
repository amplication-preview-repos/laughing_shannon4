import { EntryTypeWhereInput } from "./EntryTypeWhereInput";
import { EntryTypeOrderByInput } from "./EntryTypeOrderByInput";

export type EntryTypeFindManyArgs = {
  where?: EntryTypeWhereInput;
  orderBy?: Array<EntryTypeOrderByInput>;
  skip?: number;
  take?: number;
};
