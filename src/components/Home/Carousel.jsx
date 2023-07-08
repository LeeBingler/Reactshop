import React , { useEffect, useState } from 'react'

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const lenghtMax = 3;

    function handleOnClickPrev() {
        if (index < 0) {
            setIndex(lenghtMax);
            return;
        }

        setIndex(prev => prev - 1);
    }

    function handleOnClickNext() {
        if (index >= lenghtMax) {
            setIndex(0);
            return;
        }

        setIndex(prev => prev + 1);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
                handleOnClickNext();
            }, 6000);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <section className='relative'>
            <div className='overflow-hidden'>
                <div
                className={`flex transition-all ease-out duration-150`}
                style={{transform: `translateX(-${index * 100}%)`}}>
                    <img src="/public/banner/banner1.jpg" alt="shopping banner" />
                    <img src="/public/banner/banner2.jpg" alt="shopping banner" />
                    <img src="/public/banner/banner3.jpg" alt="shopping banner" />
                    <img src="/public/banner/banner4.png" alt="shopping banner" />
                </div>
            </div>

            <div className='flex justify-between absolute w-full top-[47%] px-3'>
                <button onClick={handleOnClickPrev}> Prev </button>
                <button onClick={handleOnClickNext}> Next </button>
            </div>
        </section>
    )
}
