import { OfficeFormSchema } from '@/components/OfficeForm';
import { publicProcedure, router } from '../trpc';

export const officeRouter = router({
  createOffice: publicProcedure.input(OfficeFormSchema).mutation(({ ctx, input }) => {
    const office = ctx.prisma.office.create({
      data: {
        ...input,
        company: {
          connect: {
            id: 'changeThis',
          },
        },
      },
    });
  }),
});
