import * as trpc from '@trpc/server';
import { publicProcedure, router } from './trpc';

const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
});

export type AppRouter = typeof appRouter;
