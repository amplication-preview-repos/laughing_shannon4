import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntryTypeServiceBase } from "./base/entryType.service.base";

@Injectable()
export class EntryTypeService extends EntryTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
