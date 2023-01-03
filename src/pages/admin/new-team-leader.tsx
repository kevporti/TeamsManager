import { useState } from 'react';
import { type NextPage } from 'next';
import Sidebar from '../../components/sidebar';

const NewTeamLeader: NextPage = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => {
    if (formStep == 1) {
      setFormStep(0);
    } else {
      setFormStep(1);
    }
  };

  return (
    <div className='flex h-screen w-full items-center bg-cool-gray-900'>
      <Sidebar />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
      />
      <div className='flex w-full justify-center'>
        <form
          action=''
          className='relative flex max-w-xl flex-grow flex-col gap-2 rounded-md p-12 text-gray-300 sm:gap-8 sm:bg-cool-gray-700 sm:p-8'
        >
          <section className={`${formStep == 0 ? 'block' : 'hidden'} flex flex-col gap-2 sm:gap-8`}>
            <div>
              <h1 className='text-xl sm:text-2xl'>Create a user for a Team Leader</h1>
            </div>
            <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
              <div className='flex flex-grow flex-col'>
                <label htmlFor='' className='pb-1 sm:pb-2'>
                  Name
                </label>
                <input
                  type='text'
                  placeholder='Name'
                  className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
                />
              </div>
              <div className='flex flex-grow flex-col'>
                <label htmlFor='' className='pb-1 sm:pb-2'>
                  Last Name
                </label>
                <input
                  type='text'
                  placeholder='Last name'
                  className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
                />
              </div>
            </div>
            <div className='flex flex-grow flex-col'>
              <label htmlFor='' className='pb-1 sm:pb-2'>
                Email
              </label>
              <input
                type='email'
                placeholder='Email'
                className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
              />
            </div>
            <div className='flex flex-grow flex-col'>
              <label htmlFor='' className='pb-1 sm:pb-2'>
                Phone Number
              </label>
              <input
                type='text'
                placeholder='+54 000 0000000'
                className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
              />
            </div>
            <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
              <div className='flex flex-grow flex-col'>
                <label htmlFor='' className='pb-1 sm:pb-2'>
                  UserName
                </label>
                <input
                  type='text'
                  placeholder='UserName'
                  className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
                />
              </div>
              <div className='flex flex-grow flex-col'>
                <label htmlFor='' className='pb-1 sm:pb-2'>
                  Password
                </label>
                <input
                  type='password'
                  placeholder='Password'
                  className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
                />
              </div>
            </div>
          </section>
          <section className={`${formStep == 1 ? 'block' : 'hidden'} flex flex-col gap-2 sm:gap-8`}>
            <div>
              <h1 className='text-xl sm:text-2xl'>Create an Office for the Team Leader</h1>
            </div>
            <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
              <div className='flex flex-grow flex-col'>
                <label htmlFor='' className='pb-1 sm:pb-2'>
                  Name
                </label>
                <input
                  type='text'
                  placeholder='Name of the Office'
                  className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
                />
              </div>
              <div className='flex flex-grow flex-col'>
                <label htmlFor='' className='pb-1 sm:pb-2'>
                  Address
                </label>
                <input
                  type='text'
                  placeholder='Inside/outside the building'
                  className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
                />
              </div>
            </div>
          </section>
          <div
            className={`${
              formStep == 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } flex flex-col-reverse gap-y-4 pt-8 sm:justify-between sm:gap-y-0 sm:pt-0`}
          >
            <div>
              <button
                className={`${
                  formStep == 0
                    ? 'border text-gray-300 hover:bg-gray-300 hover:text-gray-900'
                    : 'border-none bg-[#FEA702] text-cool-gray-800 hover:bg-[#B77701]'
                } w-full rounded-md py-2 px-8 font-semibold duration-300`}
                type='submit'
              >
                Submit
              </button>
            </div>
            <div>
              <button
                onClick={nextFormStep}
                type='button'
                className={`${
                  formStep == 1
                    ? 'border text-gray-300 hover:bg-gray-300 hover:text-gray-900'
                    : 'border-none bg-[#FEA702] text-cool-gray-800 hover:bg-[#B77701]'
                } w-full rounded-md py-2 px-8 font-semibold duration-300`}
              >
                {formStep == 0 ? 'Create Office' : 'Go Back'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTeamLeader;
