import { SignInSchema } from '@/pages/signin';
import { router, publicProcedure } from '../trpc';
import { resolve } from 'path';
// import bcrypt from 'bcrypt';

export const singInRouter = router({
  checkCredentials: publicProcedure.input(SignInSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.admin.findFirst({
      where: {
        userName: input.userName,
      },
    });
  }),
});
