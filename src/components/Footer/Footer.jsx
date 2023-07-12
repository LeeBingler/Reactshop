import React from 'react';
import InfoFooter from './InfoFooter';

export default function Footer() {
  return (
    <>
        <hr className='border-black mx-14 mt-20'/>
        <div className='pt-4'>

            <InfoFooter classProps={'flex flex-col-reverse justify-between h-16'}/>
        </div>
    </>
  )
};
