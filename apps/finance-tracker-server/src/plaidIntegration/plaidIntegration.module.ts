import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlaidIntegrationModuleBase } from "./base/plaidIntegration.module.base";
import { PlaidIntegrationService } from "./plaidIntegration.service";
import { PlaidIntegrationController } from "./plaidIntegration.controller";
import { PlaidIntegrationResolver } from "./plaidIntegration.resolver";

@Module({
  imports: [PlaidIntegrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlaidIntegrationController],
  providers: [PlaidIntegrationService, PlaidIntegrationResolver],
  exports: [PlaidIntegrationService],
})
export class PlaidIntegrationModule {}
