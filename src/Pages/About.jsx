export default function About() {
    return (
        <section className='mt-36 flex justify-center'>
            <div className='px-10 flex flex-col items-start gap-7 max-w-4xl border-l ml-2 border-black'>
                <h1 className='font-subFont text-4xl underline lg:text-5xl'>About</h1>
                <div>
                    <h2 className="subtitle-about mb-4"> Welcome to Reactshop! </h2>
                    <div className="flex flex-col gap-1 lg:gap-2 lg:text-lg">
                        <p>
                            Our mission is to sell you what you really need at a fair cost. We take
                            pride in offering you a wide range of high-quality products, including Men's
                            and Women's Clothing, Jewelery and Electronics item.
                        </p>
                        <p>
                            Our company was born out of an ideal futur for all the customer. Since then, we've evolved to
                            become a major player in the industry, consistently focusing on our core
                            values of sincerity, fair cost for everyone and a good services.
                        </p>
                        <p>
                            At Reactshop, we believe in sincerity, sharing, communication. Our dedicated
                            team works tirelessly to provide our customers with an exceptional shopping
                            experience. Our commitment to quality, sustainability, and rapidity is at
                            the heart of everything we do. We set ourselves apart by our values and our
                            products.
                        </p>

                        <p>
                            At Reactshop, we are determined to give you the best experience imaginable and
                            to create an unforgettable experience. We are excited to have you with us
                            and to assist you with your online shopping. Stay tuned for our future
                            projects as we continue to innovate and evolve to better serve you. Thank
                            you for trusting us and being part of our community.
                        </p>
                    </div>

                    <h2 className="mt-4 text-xl underline">The Reactshop Team</h2>
                </div>
                <hr className="border-b border-black w-[70%] m-auto h-[1px]" />
                <div className='flex flex-col gap-10'>
                    <div className='container-about'>
                        <h2 className='subtitle-about'>Dev Notice :</h2>
                        <div className='lg:text-lg'>
                            <p>
                                The ReactShop is a project made by{' '}
                                <a
                                    className='text-blue-500 underline hover:text-purple-500'
                                    href='https://github.com/LeeBingler'
                                >
                                    Bingler Lee
                                </a>
                                . This Web App is made with Tailwind and React.js, in order to test
                                the App I use vitest.
                            </p>
                            <p>
                                This project was made to prove my skill in API data fetch, my
                                capacity to build a functional web app with react and my skill with
                                TailwindCSS. The API data fetch is made with fetch I just fecth the
                                data one time in the first render of the App then i use the data as
                                i want in the App.
                            </p>
                        </div>
                    </div>

                    <div className='container-about'>
                        <h2 className='subtitle-about'>Source Code: </h2>
                        <a
                            className='text-blue-500 underline hover:text-purple-500 lg:text-lg'
                            href='https://github.com/LeeBingler/Reactshop'
                        >
                            Reactshop
                        </a>
                    </div>

                    <div className='container-about'>
                        <h2 className='subtitle-about'>
                            Documentation librairie and framework used :
                        </h2>
                        <ul className='px-7 lg:text-lg lg:px-10'>
                            <li>
                                -{' '}
                                <a
                                    className='text-blue-500 underline hover:text-purple-500'
                                    href='https://tailwindcss.com/'
                                >
                                    Tailwind
                                </a>
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className='text-blue-500 underline hover:text-purple-500'
                                    href='https://react.dev/'
                                >
                                    React.js
                                </a>
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className='text-blue-500 underline hover:text-purple-500'
                                    href='https://vitest.dev/'
                                >
                                    Vitest
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
