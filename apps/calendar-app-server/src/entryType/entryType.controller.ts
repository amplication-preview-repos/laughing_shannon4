import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntryTypeService } from "./entryType.service";
import { EntryTypeControllerBase } from "./base/entryType.controller.base";

@swagger.ApiTags("entryTypes")
@common.Controller("entryTypes")
export class EntryTypeController extends EntryTypeControllerBase {
  constructor(protected readonly service: EntryTypeService) {
    super(service);
  }
}
