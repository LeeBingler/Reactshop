export default function About() {
    return (
        <section className='pt-20 flex justify-center'>
            <div className='px-10 flex flex-col items-start gap-7 max-w-4xl border-l ml-2 border-black'>
                <h1 className='font-subFont text-4xl underline lg:text-5xl'>About</h1>

                <div className='container-about'>
                    <h2 className='subtitle-about'>Source Code: </h2>
                    <a
                        className='text-blue-500 underline hover:text-purple-500 lg:text-lg'
                        href='https://github.com/LeeBingler/ReactShop'
                    >
                        ReactShop
                    </a>
                </div>

                <div className='flex flex-col gap-10'>
                    <div className='container-about'>
                        <h2 className='subtitle-about'>Dev Notice :</h2>
                        <div className='lg:text-lg'>
                            <p>
                                The ReactShop is a project made by {' '}
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
