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
          <div className='flex justify-between gap-8'>
            <Input htmlFor='name' name='name' id='name' />
            <Input htmlFor='contact' name='contact' id='contact' />
          </div>

          <div className='flex justify-between gap-5'>
            <Input htmlFor='title' name='title' id='title' />
            <Input htmlFor='option' name='option' id='option' as='select' text='Importance' />
          </div>

          <Input htmlFor='description' name='description' id='discription' as='textarea' />

          <div className='flex justify-end'>
            <button className='rounded-md bg-bright-lilac px-3 py-1' type='submit'>
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default TicketForm;