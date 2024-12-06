import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlaidIntegrationServiceBase } from "./base/plaidIntegration.service.base";

@Injectable()
export class PlaidIntegrationService extends PlaidIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
