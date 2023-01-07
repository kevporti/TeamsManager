import { router } from '../trpc';
import { authRouter } from './auth';
import { singInRouter } from './signIn';
import { ticketRouter } from './ticket';

export const appRouter = router({
  signIn: singInRouter,
  ticket: ticketRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
