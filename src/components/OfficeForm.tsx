import { type NextComponentType } from 'next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React from 'react';

export const OfficeFormSchema = z.object({
  officeName: z.string().min(1, 'Required'),
  address: z.string().min(1, 'Required'),
});
type OfficeFormSchemaType = z.infer<typeof OfficeFormSchema>;

const OfficeForm: React.FC<{ setFormStep: React.Dispatch<React.SetStateAction<1 | 0>> }> = ({ setFormStep }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<OfficeFormSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(OfficeFormSchema),
  });

  const handleForm: SubmitHandler<OfficeFormSchemaType> = () => {
    console.log('Pasarle info al primer form para que se envie antes que este');
    setFormStep(1);
    reset({ officeName: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className='flex flex-col gap-2 sm:gap-8'>
      <div>
        <h1 className='text-xl sm:text-2xl'>First, create an Office for the Team Leader</h1>
      </div>
      <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
        <div className='flex flex-grow flex-col'>
          <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
            Office's Name
            <div className='pl-4 text-sm text-red-700'>{errors.officeName?.message}</div>
          </label>
          <input
            {...register('officeName')}
            type='text'
            placeholder='Name of the Office'
            className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
          />
        </div>
        <div className='flex flex-grow flex-col'>
          <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
            Address
            <div className='pl-4 text-sm text-red-700'>{errors.address?.message}</div>
          </label>
          <input
            {...register('address')}
            type='text'
            placeholder='Inside/outside the building'
            className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
          />
        </div>
      </div>
      <div className=''>
        <div>
          <h3 className='pb-2 text-sm font-thin'>
            Note: this is part two of a two-step form. If you submit one and not the other, you'll have to delete
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

export default OfficeForm;
