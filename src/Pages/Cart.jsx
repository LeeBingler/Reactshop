import { useCart, useTotalPriceCart } from '../components/Provider/Cart/Hook';
import CartCard from '../components/Cart/CartCard';
import GoBackBtn from '../components/GoBackBtn';

export default function Cart() {
  const ItemCart = useCart();
  const totalPrice = useTotalPriceCart();
  const nbItem = () => {
    let nb = 0;

    ItemCart.forEach(element => {
      nb += element.number;
    });

    return nb;
  };

  function payement() {
    alert(`You have to pay: ${totalPrice}$`);
  }

    return (
      <section className='flex flex-col pt-20 pb-7 bg-gray-200 lg:pt-32 lg:pb-20  lg:flex-row lg:justify-around lg:min-h-[60vh]'>
        <div className='bg-white max-w-7xl border border-black lg:min-w-[700px]'>
          <h1 className='font-logo text-6xl ml-4 mt-4'> Your cart : </h1>
          <hr className='mx-14 mt-10'/>
          <div className='flex flex-col items-center'>
            {ItemCart.map((item) => <CartCard key={item.id * 184821} item={item} /> )}
          </div>
          <hr className='mx-24 my-10' />
          <p className='text-right text-2xl mb-5 pr-4'>
            Total ({nbItem()} {nbItem() > 1 ? 'articles' : 'article'}): {totalPrice}$
          </p>
        </div>

        <div className='flex flex-col items-center border border-black bg-white m-4 p-2 h-fit gap-2 min-w-[310px] lg:max-w-md lg:w-full lg:sticky lg:top-16'>
          <p className='text-right text-xl whitespace-nowrap'>
            Total ({nbItem()} {nbItem() > 1 ? 'articles' : 'article'}): {totalPrice}$
          </p>
          { totalPrice == 0 ? '' :
            <button
            aria-label='checkout'
            className="rounded border border-black p-2 m-2 bg-blue-400 text-white whitespace-nowrap"
            onClick={payement}
            >
              Proceed to Checkout
            </button>
          }
          <GoBackBtn />
        </div>
      </section>
    )
}
