import { PrismaClient } from "@prisma/client";
import { Register } from "../types/Register";
import { EndOfMonth, StartOfMonth } from "../utils/date.utils";
import client from "../utils/prisma";

async function List() {
  return client.register.findMany({
    where: {
      createdAt: {
        lte: EndOfMonth(),
        gte: StartOfMonth(),
      },
    },
  });
}

async function Save(data: Register) {
  await client.register.create({ data });
}

async function DeleteAll() {
  await client.register.deleteMany({});
}

async function DeleteById(id: number) {
  await client.register.delete({ where: { id } });
}

async function DeleteByName(name: string) {
  const register = await client.register.findFirst({
    where: { name },
    select: { id: true },
  });
  await client.register.delete({ where: { id: register?.id } });
}

export const RegisterRepository = {
  Save,
  DeleteAll,
  DeleteById,
  DeleteByName,
  List,
};
