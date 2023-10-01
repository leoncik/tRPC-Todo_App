import { prisma } from "../config/prismaClient";
import { publicProcedure, router } from "../config/trpc";
import { z } from "zod";

export const todoRouter = router({
  getAll: publicProcedure.query(() => {
    return prisma.todo.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        content: z.string(),
      })
    )
    .mutation((opts) => {
      const { input } = opts;
      return prisma.todo.create({
        data: {
          content: input.content,
          isDone: false,
        },
      });
    }),
});
