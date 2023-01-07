import { useSession, signIn, signOut } from 'next-auth/react';
import { type NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '@/utils/trpc';

export const SignInSchema = z.object({
  userName: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});
type SignInSchemaType = z.infer<typeof SignInSchema>;

const SignIn: NextPage = () => {
  const { data: session } = useSession();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(SignInSchema),
  });
  const signInMutation = trpc.signIn.checkCredentials.useMutation();

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  const handleForm: SubmitHandler<SignInSchemaType> = async (formValues) => {
    signInMutation.mutate(formValues);
    reset({ userName: '', password: '' });
  };

  return (
    <div className='flex h-screen w-full items-center justify-center bg-cool-gray-900 text-gray-300'>
      <form
        onSubmit={handleSubmit(handleForm)}
        className='relative flex max-w-md flex-grow flex-col gap-2 rounded p-4 sm:gap-8 sm:bg-cool-gray-700'
      >
        <div>
          <h1 className='text-2xl font-semibold'>Sign In</h1>
          <h3 className='flex'>
            To get access to the <p className='flex px-1 text-chrome-yellow-500'>Team</p> Manager App.
          </h3>
        </div>
        <div>
          <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
            Username {errors.userName && <span className='pl-4 text-sm text-red-700'>{errors.userName?.message}</span>}
          </label>
          <input
            placeholder='Username'
            type='text'
            {...register('userName')}
            className='flex w-full rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
          />
        </div>
        <div>
          <label htmlFor='' className='flex items-center pb-1 sm:pb-2'>
            Password {errors.password && <span className='pl-4 text-sm text-red-700'>{errors.password?.message}</span>}
          </label>
          <input
            placeholder='password'
            type='password'
            {...register('password')}
            className='flex w-full rounded-md bg-cool-gray-700 p-1 sm:bg-cool-gray-900'
          />
        </div>
        <div className='flex flex-col-reverse justify-between gap-2 font-semibold sm:flex-row sm:gap-0'>
          <button
            onClick={() => signIn()}
            className='w-full rounded-md bg-gray-300 px-8 py-2 text-cool-gray-900 sm:w-auto'
          >
            Sign in with Google
          </button>
          <button type='submit' className='w-full rounded-md bg-chrome-yellow-500 px-8 py-2 sm:w-auto'>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
