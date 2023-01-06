import { z } from 'zod';
import { ticketSchema } from '@/components/TicketForm';

import { router, publicProcedure } from '../trpc';

export const ticketRouter = router({
  createTicket: publicProcedure.input(ticketSchema).mutation(({ ctx, input }) => {
    console.log(input);
    const ticket = { ...input, status: 'todo' };
    console.log(ticket);
    return ctx.prisma.ticket.create({
      data: ticket,
    });
  }),
});
