import { Module } from "@nestjs/common";
import { TimeEntryModuleBase } from "./base/timeEntry.module.base";
import { TimeEntryService } from "./timeEntry.service";
import { TimeEntryController } from "./timeEntry.controller";
import { TimeEntryResolver } from "./timeEntry.resolver";

@Module({
  imports: [TimeEntryModuleBase],
  controllers: [TimeEntryController],
  providers: [TimeEntryService, TimeEntryResolver],
  exports: [TimeEntryService],
})
export class TimeEntryModule {}
