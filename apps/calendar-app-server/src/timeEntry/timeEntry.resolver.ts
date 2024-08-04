import * as graphql from "@nestjs/graphql";
import { TimeEntryResolverBase } from "./base/timeEntry.resolver.base";
import { TimeEntry } from "./base/TimeEntry";
import { TimeEntryService } from "./timeEntry.service";

@graphql.Resolver(() => TimeEntry)
export class TimeEntryResolver extends TimeEntryResolverBase {
  constructor(protected readonly service: TimeEntryService) {
    super(service);
  }
}
