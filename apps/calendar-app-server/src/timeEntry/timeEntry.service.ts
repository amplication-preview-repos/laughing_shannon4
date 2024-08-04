import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeEntryServiceBase } from "./base/timeEntry.service.base";

@Injectable()
export class TimeEntryService extends TimeEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
