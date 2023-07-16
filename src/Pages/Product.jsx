import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useGetItemById } from '../components/Provider/ItemsProvider';
import CardCart from '../components/Navbar/CardCart';

export default function Product() {
    const idProduct= useParams();
    const getItemId = useGetItemById();
    const itemToDisplay = getItemId(Number(idProduct.id))[0];

    return (
        <section className='mt-20 bg-gray-200'>

        </section>
    )
}
