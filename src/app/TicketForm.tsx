'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const ticketSchema = z.object({
  title: z.string().min(1, 'Required'),
  name: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email().min(1, 'Required'),
  importance: z.enum(['low', 'middle', 'high']),
  description: z.string().min(1, 'Required').max(500, 'Too long'),
});

type TicketSchemaType = z.infer<typeof ticketSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(ticketSchema),
  });
  const onSubmit: SubmitHandler<TicketSchemaType> = (data) => console.log(data);

  return (
    <form className='flex flex-col rounded-md bg-cool-gray-700 p-8' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-2'>
        <label className='text-white'>Title</label>
        <input
          className='h-8 rounded-md bg-cool-gray-900 p-1 text-white outline-none focus:border-b'
          placeholder='Title'
          {...register('title')}
        />
        {errors.title ? (
          <span className='font-bold text-red-500'>*{errors.title.message}</span>
        ) : (
          <div className='h-6' />
        )}
      </div>
      <div className='p-2' />
      <div className='flex'>
        <div className='flex flex-col gap-2'>
          <label className='text-white'>Name</label>
          <input
            className='h-8 rounded-md bg-cool-gray-900 p-1 text-white outline-none focus:border-b'
            placeholder='Title'
            {...register('name')}
          />
          {errors.name ? (
            <span className='font-bold text-red-500'>*{errors.name.message}</span>
          ) : (
            <div className='h-6' />
          )}
        </div>
        <div className='w-5' />
        <div className='flex flex-col gap-2'>
          <label className='text-white'>Last name</label>
          <input
            className=' h-8 rounded-md bg-cool-gray-900 p-1 text-white outline-none focus:border-b'
            placeholder='Title'
            {...register('lastName')}
          />
          {errors.lastName && <span className='font-bold text-red-500'>*{errors.lastName.message}</span>}
        </div>
      </div>
      <div className='p-2' />
      <div className='flex w-full'>
        <div className='flex w-3/4 flex-col gap-2'>
          <label className='text-white'>Email</label>
          <input
            className='h-8 rounded-md  bg-cool-gray-900 p-1 text-white outline-none focus:border-b'
            placeholder='Title'
            {...register('email')}
          />
          {errors.email ? (
            <span className='font-bold text-red-500'>*{errors.email.message}</span>
          ) : (
            <div className='h-6' />
          )}
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
        <label className='text-white'>Something</label>
        <textarea
          className=' h-24 rounded-md bg-cool-gray-900 p-1 text-white outline-none focus:border-b '
          placeholder='Description'
          {...register('description')}
        />
        {errors.description ? (
          <span className='font-bold text-red-500'>*{errors.description.message}</span>
        ) : (
          <div className='h-6' />
        )}
      </div>
      <button className='w-fit self-center rounded-md bg-light-sky-blue py-1 px-3 font-bold' type='submit'>
        Submit
      </button>
    </form>
  );
}
