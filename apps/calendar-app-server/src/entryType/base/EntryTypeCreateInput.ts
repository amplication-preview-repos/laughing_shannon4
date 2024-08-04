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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { TimeEntryCreateNestedManyWithoutEntryTypesInput } from "./TimeEntryCreateNestedManyWithoutEntryTypesInput";
import { Type } from "class-transformer";

@InputType()
class EntryTypeCreateInput {
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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TimeEntryCreateNestedManyWithoutEntryTypesInput,
  })
  @ValidateNested()
  @Type(() => TimeEntryCreateNestedManyWithoutEntryTypesInput)
  @IsOptional()
  @Field(() => TimeEntryCreateNestedManyWithoutEntryTypesInput, {
    nullable: true,
  })
  timeEntries?: TimeEntryCreateNestedManyWithoutEntryTypesInput;
}

export { EntryTypeCreateInput as EntryTypeCreateInput };