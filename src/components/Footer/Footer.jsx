import React from 'react';
import InfoFooter from './InfoFooter';

export default function Footer() {
  return (
    <>
        <hr className='border-black mx-14 mt-20'/>
        <div className='pt-4'>
            <InfoFooter classProps={'flex flex-col-reverse justify-between h-16'}/>
            <p className='text-center pt-4 text-[15px] text-gray-700'>
              Website made by <a className='underline' href="https://github.com/LeeBingler"> Lee Bingler</a> with ❤️
            </p>
        </div>
    </>
  )
};
