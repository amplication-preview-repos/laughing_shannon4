import { Module } from "@nestjs/common";
import { EntryTypeModuleBase } from "./base/entryType.module.base";
import { EntryTypeService } from "./entryType.service";
import { EntryTypeController } from "./entryType.controller";
import { EntryTypeResolver } from "./entryType.resolver";

@Module({
  imports: [EntryTypeModuleBase],
  controllers: [EntryTypeController],
  providers: [EntryTypeService, EntryTypeResolver],
  exports: [EntryTypeService],
})
export class EntryTypeModule {}
