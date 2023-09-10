import { useParams } from 'react-router-dom';
import { useGetItemById, useItems } from '../components/Provider/ItemsProvider/Hook';
import LoadingScreen from './LoadingScreen';
import GoBackBtn from '../components/GoBackBtn';
import RatingStars from '../components/Product/RatingStars';
import CTAsection from '../components/Product/CTAsection';

export default function Product() {
    const idProduct = Number(useParams().id);
    const getItemId = useGetItemById();
    const item = getItemId(idProduct)[0];

    if (useItems().length === 0) return <LoadingScreen />;

    return (
        <section className='px-2 mt-28 flex flex-col items-center lg:flex-row lg:justify-around lg:items-start lg:mt-40 lg:px-14 w-full'>
            <div className='flex flex-col justify-center items-center border p-10 w-4/5 max-w-sm xl:max-w-lg'>
                <img className='h-min max-h-full' src={item.image} alt={item.title} />
            </div>

            <div className='w-4/5 my-4 max-w-3xl lg:mb-0 lg:mt-0 lg:ml-5'>
                <h1 className='py-5 font-medium text-2xl lg:text-2xl lg:mx-4 lg:pt-0'>{item.title}</h1>
                <RatingStars rating={item.rating} />
                <div className='border-t border-b border-gray-400 my-4 py-6 lg:mb-0 lg:pb-0 lg:mx-4'>
                    <h2 className='mb-4 mt-1 text-xl font-medium'> About this item </h2>
                    <p className='text-gray-600 text-justify 2xl:text-xl md:p-4'>
                        {item.description}
                    </p>
                </div>
            </div>

            <div className='flex flex-col w-4/5 justify-center items-center'>
                <CTAsection item={item} />
                <GoBackBtn  className='w-32' />
            </div>
        </section>
    );
}
