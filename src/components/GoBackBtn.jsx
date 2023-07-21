import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

export default function GoBackBtn() {
  return (
    <>
      <button
      name='go to previous page'
      className='text-blue-400 text-xl lg:text-2xl border border-black rounded px-[3px] '
      >
          <Link
          to={-1}
          onClick={() => {
            window.scroll(0, 0);
          }}>
              Go Back
          </Link>
      </button>
      <ScrollToTop />
    </>
  )
};
