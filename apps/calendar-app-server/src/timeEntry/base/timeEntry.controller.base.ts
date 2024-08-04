/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TimeEntryService } from "../timeEntry.service";
import { TimeEntryCreateInput } from "./TimeEntryCreateInput";
import { TimeEntry } from "./TimeEntry";
import { TimeEntryFindManyArgs } from "./TimeEntryFindManyArgs";
import { TimeEntryWhereUniqueInput } from "./TimeEntryWhereUniqueInput";
import { TimeEntryUpdateInput } from "./TimeEntryUpdateInput";

export class TimeEntryControllerBase {
  constructor(protected readonly service: TimeEntryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TimeEntry })
  async createTimeEntry(
    @common.Body() data: TimeEntryCreateInput
  ): Promise<TimeEntry> {
    return await this.service.createTimeEntry({
      data: {
        ...data,

        calendar: data.calendar
          ? {
              connect: data.calendar,
            }
          : undefined,

        entryType: data.entryType
          ? {
              connect: data.entryType,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        calendar: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        description: true,

        entryType: {
          select: {
            id: true,
          },
        },

        hoursWorked: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TimeEntry] })
  @ApiNestedQuery(TimeEntryFindManyArgs)
  async timeEntries(@common.Req() request: Request): Promise<TimeEntry[]> {
    const args = plainToClass(TimeEntryFindManyArgs, request.query);
    return this.service.timeEntries({
      ...args,
      select: {
        calendar: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        description: true,

        entryType: {
          select: {
            id: true,
          },
        },

        hoursWorked: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TimeEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async timeEntry(
    @common.Param() params: TimeEntryWhereUniqueInput
  ): Promise<TimeEntry | null> {
    const result = await this.service.timeEntry({
      where: params,
      select: {
        calendar: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        description: true,

        entryType: {
          select: {
            id: true,
          },
        },

        hoursWorked: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TimeEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTimeEntry(
    @common.Param() params: TimeEntryWhereUniqueInput,
    @common.Body() data: TimeEntryUpdateInput
  ): Promise<TimeEntry | null> {
    try {
      return await this.service.updateTimeEntry({
        where: params,
        data: {
          ...data,

          calendar: data.calendar
            ? {
                connect: data.calendar,
              }
            : undefined,

          entryType: data.entryType
            ? {
                connect: data.entryType,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          calendar: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          date: true,
          description: true,

          entryType: {
            select: {
              id: true,
            },
          },

          hoursWorked: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TimeEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTimeEntry(
    @common.Param() params: TimeEntryWhereUniqueInput
  ): Promise<TimeEntry | null> {
    try {
      return await this.service.deleteTimeEntry({
        where: params,
        select: {
          calendar: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          date: true,
          description: true,

          entryType: {
            select: {
              id: true,
            },
          },

          hoursWorked: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}