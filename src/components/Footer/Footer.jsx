import React from 'react';
import InfoFooter from './InfoFooter';
import LinkFooter from './LinkFooter';

export default function Footer() {
  return (
    <>
        <hr className='border-black mx-14 mt-20'/>
        <div className='pt-4'>
            <LinkFooter />
            <InfoFooter classProps={'flex flex-col-reverse justify-between h-16'}/>
            <p className='text-center mt-4 text-[15px] w-full bg-black text-white'>
              Website made by <a className='underline' href="https://github.com/LeeBingler"> Lee Bingler</a> with ❤️
            </p>
        </div>
    </>
  )
};
