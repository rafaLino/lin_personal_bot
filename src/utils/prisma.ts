import { PrismaClient } from "@prisma/client";
import { isProduction } from "./isProduction";

declare global {
  var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (isProduction()) {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
