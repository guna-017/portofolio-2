'use client';
import React, { useState } from 'react';
import { Button } from './button';
import Image from 'next/image';

const FormInput: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Data sent:', formData);
    //
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto w-full space-y-4 rounded-lg p-4 shadow-md'
    >
      <div>
        <label htmlFor='name' className='text-neutral-25 block text-sm'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-neutral-900 p-2'
          required
          placeholder='Enter your name'
        />
      </div>

      <div>
        <label htmlFor='email' className='text-neutral-25 block text-sm'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-neutral-900 p-2'
          required
          placeholder='Enter your email'
        />
      </div>

      <div>
        <label htmlFor='message' className='text-neutral-25 block text-sm'>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          value={formData.message}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-neutral-900 p-2'
          required
          placeholder='Enter your message'
          rows={5}
        />
      </div>

      <Button
        type='submit'
        variant='outline'
        className='flex w-full items-center gap-2'
      >
        <Image
          src='/icons/black-mail.png'
          alt='send-button'
          width={24}
          height={24}
        />
        <p className='text-sm font-semibold'>Send Message</p>
      </Button>
    </form>
  );
};

export default FormInput;
