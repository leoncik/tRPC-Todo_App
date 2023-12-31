import { router } from "../config/trpc";
import { todoRouter } from "./todoRouter";

export const appRouter = router({
  todo: todoRouter,
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
