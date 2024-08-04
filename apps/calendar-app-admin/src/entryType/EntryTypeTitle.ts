import { EntryType as TEntryType } from "../api/entryType/EntryType";

export const ENTRYTYPE_TITLE_FIELD = "name";

export const EntryTypeTitle = (record: TEntryType): string => {
  return record.name?.toString() || String(record.id);
};
