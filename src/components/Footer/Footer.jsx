import LinkFooter from './components/LinkFooter';
import PrivacyFooter from './components/PrivacyFooter';

export default function Footer() {
  return (
    <>
        <hr className='border-black mx-14 mt-20'/>

        <div className='py-6 w-full md:flex md:justify-around md:items-center'>
            <LinkFooter />
            <PrivacyFooter />
        </div>
        <p className='text-center'>© 2023 React Shop All Rights Reserved </p>
        <p className='text-center py-3 mt-4 text-[15px] w-full bg-black text-white'>
          Made by <a className='underline' href="https://github.com/LeeBingler"> Lee Bingler</a> with ❤️
        </p>
    </>
  )
}
