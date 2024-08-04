/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CalendarWhereUniqueInput } from "../../calendar/base/CalendarWhereUniqueInput";

import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { Type } from "class-transformer";
import { EntryTypeWhereUniqueInput } from "../../entryType/base/EntryTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class TimeEntryCreateInput {
  @ApiProperty({
    required: false,
    type: () => CalendarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CalendarWhereUniqueInput)
  @IsOptional()
  @Field(() => CalendarWhereUniqueInput, {
    nullable: true,
  })
  calendar?: CalendarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => EntryTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EntryTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => EntryTypeWhereUniqueInput, {
    nullable: true,
  })
  entryType?: EntryTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  hoursWorked?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { TimeEntryCreateInput as TimeEntryCreateInput };
