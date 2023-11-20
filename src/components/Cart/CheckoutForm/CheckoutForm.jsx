import { useState } from 'react';
import InputForm from './components/InputForm';

const styleInput ='flex flex-col gap-2 lg:text-lg';

function CheckoutForm({data, setData}) {

    return (
        <form className='flex flex-col gap-10 justify-center items-center'>
            <InputForm
                type='email'
                title='email'
                dataToChange={data.email}
                setDataToChange={setData}
                className={styleInput}
            />
            <InputForm
                title='address'
                dataToChange={data.address}
                setDataToChange={setData}
                className={styleInput}
            />
            <InputForm
                title='country'
                dataToChange={data.country}
                setDataToChange={setData}
                className={styleInput}
            />
        </form>
    );
}

export default CheckoutForm;
