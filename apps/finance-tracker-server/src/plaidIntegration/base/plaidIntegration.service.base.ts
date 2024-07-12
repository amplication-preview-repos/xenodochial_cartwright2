/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PlaidIntegration as PrismaPlaidIntegration,
} from "@prisma/client";

export class PlaidIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PlaidIntegrationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.plaidIntegration.count(args);
  }

  async plaidIntegrations(
    args: Prisma.PlaidIntegrationFindManyArgs
  ): Promise<PrismaPlaidIntegration[]> {
    return this.prisma.plaidIntegration.findMany(args);
  }
  async plaidIntegration(
    args: Prisma.PlaidIntegrationFindUniqueArgs
  ): Promise<PrismaPlaidIntegration | null> {
    return this.prisma.plaidIntegration.findUnique(args);
  }
  async createPlaidIntegration(
    args: Prisma.PlaidIntegrationCreateArgs
  ): Promise<PrismaPlaidIntegration> {
    return this.prisma.plaidIntegration.create(args);
  }
  async updatePlaidIntegration(
    args: Prisma.PlaidIntegrationUpdateArgs
  ): Promise<PrismaPlaidIntegration> {
    return this.prisma.plaidIntegration.update(args);
  }
  async deletePlaidIntegration(
    args: Prisma.PlaidIntegrationDeleteArgs
  ): Promise<PrismaPlaidIntegration> {
    return this.prisma.plaidIntegration.delete(args);
  }
}
