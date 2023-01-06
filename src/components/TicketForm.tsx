'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '@/utils/trpc';
import { z } from 'zod';
import Input from '@components/Input';

export const ticketSchema = z.object({
  title: z.string().min(1, 'Required'),
  nameOfSender: z.string().min(1, 'Required'),
  lastNameOfSender: z.string().min(1, 'Required'),
  emailOfSender: z.string().email().min(1, 'Required'),
  importance: z.enum(['low', 'middle', 'high']),
  description: z.string().min(1, 'Required').max(500, 'Too long'),
});

type TicketSchemaType = z.infer<typeof ticketSchema>;

export default function TicketForm() {
  const mutation = trpc.ticket.createTicket.useMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TicketSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(ticketSchema),
  });

  const onSubmit: SubmitHandler<TicketSchemaType> = (data) => {
    mutation.mutate(data);
    reset({ title: '', nameOfSender: '', lastNameOfSender: '', emailOfSender: '', description: '' });
  };

  return (
    <form className='flex flex-col rounded-md bg-cool-gray-700 p-8' onSubmit={handleSubmit(onSubmit)}>
      <Input reference='title' label='Title' error={errors.title?.message} {...register('title')} />
      <div className='p-2' />
      <div className='flex'>
        <Input
          reference='nameOfSender'
          label='Name'
          error={errors.nameOfSender?.message}
          {...register('nameOfSender')}
        />
        <div className='w-5' />
        <Input
          reference='lastNameOfSender'
          label='Last name'
          error={errors.lastNameOfSender?.message}
          {...register('lastNameOfSender')}
        />
      </div>
      <div className='p-2' />
      <div className='flex w-full'>
        <div className='flex w-3/4 flex-col gap-2'>
          <Input
            reference='emailOfSender'
            label='Email'
            error={errors.emailOfSender?.message}
            {...register('emailOfSender')}
          />
        </div>
        <div className='w-5' />
        <div className='flex w-1/4 flex-col gap-2'>
          <label className='text-white'>Importance</label>
          <select
            className='h-8 rounded-md bg-cool-gray-900 p-1 text-white  outline-none'
            placeholder='Title'
            {...register('importance')}
          >
            <option value='low'>Low</option>
            <option value='middle'>Middle</option>
            <option value='high'>High</option>
          </select>
          {errors.importance && <span className='font-bold text-red-500'>*{errors.importance.message}</span>}
        </div>
      </div>
      <div className='p-2' />
      <div className='flex flex-col gap-2'>
        <div className='flex gap-x-5'>
          <label className='text-white'>Description</label>
          {errors.description?.message && <span className='font-bold text-red-500'>{errors.description.message}</span>}
        </div>
        <textarea
          className=' h-24 rounded-md bg-cool-gray-900 p-1 text-white outline-none focus:border-b '
          placeholder='Description'
          {...register('description')}
        />
      </div>
      <button className='w-fit self-center rounded-md bg-light-sky-blue py-1 px-3 font-bold' type='submit'>
        Submit
      </button>
    </form>
  );
}
