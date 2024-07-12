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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PlaidIntegrationService } from "../plaidIntegration.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlaidIntegrationCreateInput } from "./PlaidIntegrationCreateInput";
import { PlaidIntegration } from "./PlaidIntegration";
import { PlaidIntegrationFindManyArgs } from "./PlaidIntegrationFindManyArgs";
import { PlaidIntegrationWhereUniqueInput } from "./PlaidIntegrationWhereUniqueInput";
import { PlaidIntegrationUpdateInput } from "./PlaidIntegrationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlaidIntegrationControllerBase {
  constructor(
    protected readonly service: PlaidIntegrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlaidIntegration })
  @nestAccessControl.UseRoles({
    resource: "PlaidIntegration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPlaidIntegration(
    @common.Body() data: PlaidIntegrationCreateInput
  ): Promise<PlaidIntegration> {
    return await this.service.createPlaidIntegration({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PlaidIntegration] })
  @ApiNestedQuery(PlaidIntegrationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PlaidIntegration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async plaidIntegrations(
    @common.Req() request: Request
  ): Promise<PlaidIntegration[]> {
    const args = plainToClass(PlaidIntegrationFindManyArgs, request.query);
    return this.service.plaidIntegrations({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlaidIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlaidIntegration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async plaidIntegration(
    @common.Param() params: PlaidIntegrationWhereUniqueInput
  ): Promise<PlaidIntegration | null> {
    const result = await this.service.plaidIntegration({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PlaidIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlaidIntegration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePlaidIntegration(
    @common.Param() params: PlaidIntegrationWhereUniqueInput,
    @common.Body() data: PlaidIntegrationUpdateInput
  ): Promise<PlaidIntegration | null> {
    try {
      return await this.service.updatePlaidIntegration({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: PlaidIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlaidIntegration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePlaidIntegration(
    @common.Param() params: PlaidIntegrationWhereUniqueInput
  ): Promise<PlaidIntegration | null> {
    try {
      return await this.service.deletePlaidIntegration({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
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
