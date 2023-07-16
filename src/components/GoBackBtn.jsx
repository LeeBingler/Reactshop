import React from 'react';
import { Link } from 'react-router-dom';

export default function GoBackBtn() {
  return (
    <button
    className='text-blue-400 text-xl lg:text-2xl border border-black rounded px-[3px] '
    >
        <Link to={-1}>
            Go Back
        </Link>
    </button>
  )
};
