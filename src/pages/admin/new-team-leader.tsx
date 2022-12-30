import { type NextPage } from 'next';
import Sidebar from '../../components/sidebar';

const NewTeamLeader: NextPage = () => {
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
          <div className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
            <div className='flex flex-grow flex-col'>
              <label htmlFor='' className='pb-1 sm:pb-2'>
                Name
              </label>
              <input
                required
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
                required
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
              required
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
              required
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
                required
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
                required
                type='password'
                placeholder='Password'
                className='flex rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
              />
            </div>
          </div>
          <div className='flex flex-col-reverse gap-y-4 pt-8 sm:flex-row sm:justify-between sm:gap-y-0 sm:pt-0'>
            <div>
              <button
                className='w-full rounded-md border py-2 font-semibold text-gray-300 duration-300 hover:bg-gray-300 hover:py-3 hover:px-9 hover:text-gray-900 sm:w-auto sm:px-8'
                type='submit'
              >
                Submit
              </button>
            </div>
            <div>
              <button className='w-full rounded-md bg-[#FEA702] py-2 font-semibold text-gray-900 duration-300 hover:bg-[#B77701] hover:py-3 hover:px-9 hover:font-bold sm:w-auto sm:px-8'>
                Continue creating Office
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTeamLeader;
