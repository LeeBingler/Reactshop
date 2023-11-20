import { useState } from 'react';
import CheckoutBtn from '../components/Checkout/CheckoutBtn';
import { useCart } from '../components/Provider/CartProvider/Hook';
import InputForm from '../components/Checkout/InputForm';

function Checkout() {
    const itemCart = useCart();
    const [data, setData] = useState({
        email: '',
        address: '',
        country: ''
    });

    console.log(data);

    return (
        <section className='pt-32'>
            <InputForm title='email' dataToChange={data.email} setDataToChange={setData} />
            <InputForm title={'address'} dataToChange={data.address} setDataToChange={setData} />
            <InputForm title={'country'} dataToChange={data.country} setDataToChange={setData} />
            {data.email != '' && data.address != '' && data.country != '' && (
                <CheckoutBtn itemCart={itemCart} />
            )}
        </section>
    );
}

export default Checkout;
