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

  deleteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation((opts) => {
      const { input } = opts;
      return prisma.todo.delete({
        where: {
          id: input.id,
        },
      });
    }),

  updateById: publicProcedure
    .input(z.object({ id: z.string(), isDone: z.boolean() }))
    .mutation((opts) => {
      const { input } = opts;
      return prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          isDone: input.isDone,
        },
      });
    }),
});
