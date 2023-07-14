import React from 'react'
import { useForm } from 'react-hook-form';

export default function Forms() {
    const { register } = useForm();

    return (
        <form method='POST' action="https://formspree.io/f/xdornrqb"
        className='flex flex-col w-[94%] max-w-4xl justify-center border border-black rounded p-4 mx-4 shadow-2xl'>
            <div className='pb-4 w-full grid grid-cols-2 grid-rows-3 md:grid-rows-2'>
                <div className='flex flex-col w-full col-span-full md:col-span-1'>
                    <label className='text-blue-500 translate-x-2' htmlFor='name'> Fullname </label>
                    <input name='name' {...register('Name')} placeholder='Your Name'
                    className='border border-black rounded p-2 m-2'/>
                </div>
                <div className='flex flex-col w-full col-span-full md:col-span-1'>
                    <label className='text-blue-500 translate-x-2' htmlFor="email"> Email </label>
                    <input name='email' {...register('email')} placeholder='Your Email'
                    className='border border-black rounded p-2 m-2'/>
                </div>
                <div className='flex flex-col w-full col-span-full'>
                    <label className='text-blue-500 translate-x-2' htmlFor="subject"> Subject </label>
                    <input name='subject' {...register('subject')} placeholder='The subject of your mail'
                    className='border border-black rounded p-2 m-2'/>
                </div>
            </div>
            <label className='text-blue-500 translate-x-2' htmlFor="content"> Content</label>
            <textarea name='content' {...register('Content')} placeholder='the Content'
            className='border border-black rounded p-2 m-2 h-48' />
            <div className='flex items-center justify-center w-full my-4'>
                <input type="submit" className='border border-black rounded w-fit p-1 text-blue-400 hover:cursor-pointer'/>
            </div>
        </form>
    )
}
