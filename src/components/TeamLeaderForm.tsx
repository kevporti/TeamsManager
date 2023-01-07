import { type NextComponentType } from 'next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React from 'react';

export const TeamLeaderSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email().min(1, 'Required'),
  phoneNumber: z.string().min(1, 'Required'),
  userName: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});
type TeamLeaderSchemaType = z.infer<typeof TeamLeaderSchema>;

const TeamLeaderForm: React.FC<{ setFormStep: React.Dispatch<React.SetStateAction<1 | 0>> }> = ({ setFormStep }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamLeaderSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(TeamLeaderSchema),
  });

  const handleForm: SubmitHandler<TeamLeaderSchemaType> = () => {
    console.log('Holdear form hasta que se envie el de Office');
    setFormStep(0);
    reset({ firstName: '', lastName: '', email: '', phoneNumber: '', userName: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className='flex flex-col gap-2 sm:gap-8'>
      <div>
        <h1 className='text-xl sm:text-2xl'>Now, create the user to give him access</h1>
      </div>
      <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
        <div className='flex flex-grow flex-col'>
          <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
            Name
            <div className='pl-4 text-sm text-red-700'>{errors.firstName?.message}</div>
          </label>
          <input
            {...register('firstName')}
            type='text'
            placeholder='Name'
            className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
          />
        </div>
        <div className='flex flex-grow flex-col'>
          <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
            Last Name
            <div className='pl-4 text-sm text-red-700'>{errors.lastName?.message}</div>
          </label>
          <input
            {...register('lastName')}
            type='text'
            placeholder='Last name'
            className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
          />
        </div>
      </div>
      <div className='flex flex-grow flex-col'>
        <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
          Email
          <div className='pl-4 text-sm text-red-700'>{errors.email?.message}</div>
        </label>
        <input
          {...register('email')}
          type='email'
          placeholder='Email'
          className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
        />
      </div>
      <div className='flex flex-grow flex-col'>
        <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
          Phone Number
          <div className='pl-4 text-sm text-red-700'>{errors.phoneNumber?.message}</div>
        </label>
        <input
          {...register('phoneNumber')}
          type='text'
          placeholder='+54 000 0000000'
          className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
        />
      </div>
      <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
        <div className='flex flex-grow flex-col'>
          <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
            UserName
            <div className='pl-4 text-sm text-red-700'>{errors.userName?.message}</div>
          </label>
          <input
            {...register('userName')}
            type='text'
            placeholder='UserName'
            className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
          />
        </div>
        <div className='flex flex-grow flex-col'>
          <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
            Password
            <div className='pl-4 text-sm text-red-700'>{errors.password?.message}</div>
          </label>
          <input
            {...register('password')}
            type='password'
            placeholder='Password'
            className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
          />
        </div>
      </div>
      <div className=''>
        <div>
          <h3 className='pb-2 text-sm font-thin'>
            Note: this is part one of a two-step form. If you submit one and not the other, you'll have to delete
            manually the office.
          </h3>
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='flex-grow rounded-md bg-chrome-yellow-500 px-8 py-2 font-bold text-cool-gray-700 hover:bg-chrome-yellow-600 sm:flex-none'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default TeamLeaderForm;
