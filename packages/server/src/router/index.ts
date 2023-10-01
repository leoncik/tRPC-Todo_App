import { router } from "../config/trpc";
const appRouter = router({
  // ...
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
