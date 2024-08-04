import * as graphql from "@nestjs/graphql";
import { EntryTypeResolverBase } from "./base/entryType.resolver.base";
import { EntryType } from "./base/EntryType";
import { EntryTypeService } from "./entryType.service";

@graphql.Resolver(() => EntryType)
export class EntryTypeResolver extends EntryTypeResolverBase {
  constructor(protected readonly service: EntryTypeService) {
    super(service);
  }
}
