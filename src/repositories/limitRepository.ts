import client from "../utils/prisma";

async function Get(): Promise<number> {
  const limit = await client.limit.findFirst();
  return limit?.value ?? 0;
}

async function Save(newLimit: number) {
  const limit = await client.limit.findFirst({ select: { id: true } });

  const data = { value: newLimit };

  await client.limit.upsert({
    create: data,
    update: data,
    where: { id: limit?.id ?? 1 },
  });
}

export const LimitRepository = {
  Save,
  Get,
};
