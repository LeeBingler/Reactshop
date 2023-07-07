import React from 'react';
import { Link } from 'react-router-dom';

export default function InfoFooter({classProps}) {

    return (
        <section className={classProps} >
            <p>© 2023 React Shop All Rights Reserved </p>
            <div className='flex flex-row justify-around'>
                <Link className='underline hover:text-gray-700' to='privacy-center'> Privacy center </Link>
                <Link className='underline hover:text-gray-700' to='terms-and-conditions'> Terms and Conditions </Link>
            </div>
        </section>
    )
}
