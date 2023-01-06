import React from 'react';

type Props = {
  reference: string;
  label: string;
  error: string | undefined;
};

const Input = React.forwardRef<HTMLInputElement, Props>(({ reference, label, error, ...rest }, ref) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-x-5'>
        <label className='text-white' htmlFor={reference}>
          {label}
        </label>
        {error && <span className='font-bold text-red-500'>{error}</span>}
      </div>
      <input
        className='h-8 rounded-md bg-cool-gray-900 p-1 text-white outline-none focus:border-b'
        name={reference}
        placeholder={label}
        {...rest}
        ref={ref}
      />
    </div>
  );
});

export default Input;
