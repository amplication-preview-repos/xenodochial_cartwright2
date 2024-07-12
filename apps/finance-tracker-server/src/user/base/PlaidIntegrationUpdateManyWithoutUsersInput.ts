/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlaidIntegrationWhereUniqueInput } from "../../plaidIntegration/base/PlaidIntegrationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlaidIntegrationUpdateManyWithoutUsersInput {
  @Field(() => [PlaidIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaidIntegrationWhereUniqueInput],
  })
  connect?: Array<PlaidIntegrationWhereUniqueInput>;

  @Field(() => [PlaidIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaidIntegrationWhereUniqueInput],
  })
  disconnect?: Array<PlaidIntegrationWhereUniqueInput>;

  @Field(() => [PlaidIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaidIntegrationWhereUniqueInput],
  })
  set?: Array<PlaidIntegrationWhereUniqueInput>;
}

export { PlaidIntegrationUpdateManyWithoutUsersInput as PlaidIntegrationUpdateManyWithoutUsersInput };
