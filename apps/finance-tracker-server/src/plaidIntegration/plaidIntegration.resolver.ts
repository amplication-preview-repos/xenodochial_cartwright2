import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlaidIntegrationResolverBase } from "./base/plaidIntegration.resolver.base";
import { PlaidIntegration } from "./base/PlaidIntegration";
import { PlaidIntegrationService } from "./plaidIntegration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlaidIntegration)
export class PlaidIntegrationResolver extends PlaidIntegrationResolverBase {
  constructor(
    protected readonly service: PlaidIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
