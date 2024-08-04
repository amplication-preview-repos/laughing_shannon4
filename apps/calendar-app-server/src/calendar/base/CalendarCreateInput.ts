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
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TimeEntryCreateNestedManyWithoutCalendarsInput } from "./TimeEntryCreateNestedManyWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CalendarCreateInput {
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
    type: () => TimeEntryCreateNestedManyWithoutCalendarsInput,
  })
  @ValidateNested()
  @Type(() => TimeEntryCreateNestedManyWithoutCalendarsInput)
  @IsOptional()
  @Field(() => TimeEntryCreateNestedManyWithoutCalendarsInput, {
    nullable: true,
  })
  timeEntries?: TimeEntryCreateNestedManyWithoutCalendarsInput;

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

export { CalendarCreateInput as CalendarCreateInput };
