import Carousel from '../components/Home/Carousel';
import Shop from '../components/Home/Shop/Shop';
import img1 from '/src/images/banner1.webp';
import img2 from '/src/images/banner2.webp'
import img3 from '/src/images/banner3.webp'
import img4 from '/src/images/banner4.webp'

export default function Home() {

  return (
    <main>
        <div className='flex content-center justify-center'>
          <Carousel>
            <img src={img1} alt="banner 1" />
            <img src={img2} alt="banner 2" />
            <img src={img3} alt="banner 3" />
            <img src={img4} alt="banner 4" />
          </Carousel>
        </div>
        <Shop />
    </main>
  )
}
