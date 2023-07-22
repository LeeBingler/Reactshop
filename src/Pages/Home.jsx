import Carousel from '../components/Home/Carousel';
import Shop from '../components/Home/Shop/Shop';

export default function Home() {

  return (
    <main>
        <div className='flex content-center justify-center'>
          <Carousel />
        </div>
        <Shop />
    </main>
  )
}
