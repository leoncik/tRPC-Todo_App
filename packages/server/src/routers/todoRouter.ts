import { prisma } from "../config/prismaClient";
import { publicProcedure, router } from "../config/trpc";

export const todoRouter = router({
  getAll: publicProcedure.query(() => {
    return prisma.todo.findMany();
  }),
});
