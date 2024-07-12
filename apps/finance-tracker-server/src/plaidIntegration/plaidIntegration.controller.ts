import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlaidIntegrationService } from "./plaidIntegration.service";
import { PlaidIntegrationControllerBase } from "./base/plaidIntegration.controller.base";

@swagger.ApiTags("plaidIntegrations")
@common.Controller("plaidIntegrations")
export class PlaidIntegrationController extends PlaidIntegrationControllerBase {
  constructor(
    protected readonly service: PlaidIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
