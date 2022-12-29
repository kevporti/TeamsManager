import { router } from '../trpc';
import { authRouter } from './auth';
import { ticketRouter } from './ticket';

export const appRouter = router({
  ticket: ticketRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
