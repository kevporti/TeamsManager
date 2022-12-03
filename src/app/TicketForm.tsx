'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const ticketSchema = z.object({
  title: z.string().min(1, 'Required'),
  name: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  emial: z.string().email().min(1, 'Required'),
  importance: z.enum(['low', 'middle', 'high']),
  description: z.string().max(500, 'Too long'),
});

type TicketSchemaType = z.infer<typeof ticketSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(ticketSchema),
  });
  const onSubmit: SubmitHandler<TicketSchemaType> = (data) => console.log(data);

  console.log(errors);

  return (
    <form className='rounded-md bg-cool-gray-600 p-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-2'>
        <label className='text-white'>Something</label>
        <input className='rounded-md bg-cool-gray-900' placeholder='Title' {...register('title')} />
        {errors.title && <span>{errors.title.message}</span>}
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-white'>Something</label>
        <input className='rounded-md bg-cool-gray-900' placeholder='Title' {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
