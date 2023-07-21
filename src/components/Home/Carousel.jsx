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
        <section className='relative pt-[4.5rem] max-w-5xl'>
            <div className='overflow-hidden'>
                <div
                className='flex transition-all ease-out duration-150'
                style={{transform: `translateX(-${index * 100}%)`}}>
                    <img src="/banner/banner1.jpg" alt="shopping banner 1" />
                    <img src="/banner/banner2.jpg" alt="shopping banner 2" />
                    <img src="/banner/banner3.jpg" alt="shopping banner 3" />
                    <img src="/banner/banner4.png" alt="shopping banner 4" />
                </div>
            </div>

            <div className='flex justify-between absolute w-full top-[47%] px-3'>
                <button id='prevBtn' className='btn-carousel' onClick={handleOnClickPrev} name='see previous image'>
                    <i className='bx bx-chevron-left' ></i>
                </button>
                <button id='nextBtn' className='btn-carousel' onClick={handleOnClickNext} name='see next image'>
                    <i className='bx bx-chevron-right'></i>
                </button>
            </div>
        </section>
    )
}
