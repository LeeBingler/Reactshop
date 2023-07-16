import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetItemById } from '../components/Provider/ItemsProvider';
import { useAddItemCart } from '../components/Provider/CartProvider';

export default function Product() {
    const idProduct= useParams();
    const getItemId = useGetItemById();
    const item = getItemId(Number(idProduct.id))[0];
    const onClickHandler = useAddItemCart();

    return (
        <section className='mt-20 flex flex-col items-center lg:flex-row lg:justify-around lg:items-end w-full'>
            <div className='w-4/5 my-4 max-w-3xl lg:mb-0'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='max-h-64 w-60 px-4' src={item.image} alt={item.title} />
                </div>
                <div className='m-2 p-2'>
                    <h1 className='p-2 overflow-hidden text-ellipsis whitespace-nowrap text-center
                        text-xl lg:text-2xl'>
                        {item.title}
                    </h1>
                    <div className='border my-9 p-3 lg:mb-0 lg:pb-0'>
                        <h2 className='mb-4 mt-1 underline text-xl'> Description : </h2>
                        <p className='text-gray-600 text-justify md:text-xl md:p-4'>
                            {item.description}
                        </p>
                        <p className='py-5 w-full font-semibold md:ml-4'>
                            ⭐ {item.rating.rate}
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-4 h-full border-black border-t pt-4 px-8 lg:pl-5 lg:py-8 lg:border-l lg:border-t-0'>
                <p className='text-xl md:text-2xl lg:text-3xl'>
                    ${item.price}
                </p>
                <button
                className='text-xl lg:text-2xl border border-black rounded text-center align-middle px-[3px] text-white bg-blue-400'
                onClick={() => {onClickHandler(item, item.number + 1)}}
                >
                    Add to Cart
                </button>
            </div>
        </section>
    )
}
