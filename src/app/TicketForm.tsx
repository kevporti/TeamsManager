'use client';

import { Field, Form, Formik } from 'formik';
import Input from '@/app/Input';
import React from 'react';

function TicketForm() {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          contact: '',
          title: '',
          importance: '',
          description: '',
        }}
        onSubmit={() => console.log('hi')}
      >
        <Form className='flex flex-col gap-8 rounded-md bg-cool-gray-700 p-5'>
          <div className='flex items-center justify-between gap-8'>
            <Input htmlFor='name' name='name' id='name' />
            <Input htmlFor='contact' name='contact' id='contact' />
          </div>

          <div className='flex w-full gap-5'>
            <Input htmlFor='title' name='title' id='title' containerClass='w-3/4' />
            <Input htmlFor='option' name='option' id='option' as='select' text='Importance' containerClass='w-1/4' />
          </div>

          <Input htmlFor='description' name='description' id='discription' as='textarea' />

          <div className='flex justify-end'>
            <button className='rounded-md bg-bright-lilac px-3 py-1 hover:bg-light-sky-blue' type='submit'>
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default TicketForm;
