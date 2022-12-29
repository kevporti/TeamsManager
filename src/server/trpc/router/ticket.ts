import { z } from 'zod';

import { router, publicProcedure } from '../trpc';

export const ticketRouter = router({
  createTicket: publicProcedure
    .input(
      z.object({
        title: z.string().min(1, 'Required'),
        nameOfSender: z.string().min(1, 'Required'),
        lastNameOfSender: z.string().min(1, 'Required'),
        emailOfSender: z.string().email().min(1, 'Required'),
        importance: z.enum(['low', 'middle', 'high']),
        description: z.string().min(1, 'Required').max(500, 'Too long'),
      })
    )
    .mutation(({ ctx, input }) => {
      console.log(input);
      const ticket = { ...input, status: 'todo' };
      console.log(ticket);
      return ctx.prisma.ticket.create({
        data: ticket,
      });
    }),
});
