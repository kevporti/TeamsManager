import { router } from '../trpc';
import { authRouter } from './auth';
import { officeRouter } from './office';
import { ticketRouter } from './ticket';

export const appRouter = router({
  createOffice: officeRouter,
  ticket: ticketRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
