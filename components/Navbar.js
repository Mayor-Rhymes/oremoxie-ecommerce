

import Link from 'next/link';

import {useCartContext} from '../context/CartContext';





const Navbar = () => {


  const {cart, totalQuantity} = useCartContext();
  

  console.log(cart)

  return (
    <nav className="pb-5 lg:flex md:h-[70px] lg:pt-4 lg:h-[70px] w-[screen] bg-gray-900 text-white text-md lg:items-center px-2">
       
        <h3 className="grow-[1]">Oremoxie</h3>

        <p className="justify-end lg:hidden md:hidden">Menu</p>


       <ul className="lg:hidden md:hidden">

          <li><Link href="/">Home</Link></li>
          <li><Link href="">Contact</Link></li>
          <li><Link href="/cart"><span>Cart {totalQuantity}</span></Link></li>
           
       </ul>

        <ul className="hidden md:flex grow-[3] lg:flex justify-evenly h-[full] cursor-pointer">

            <li><Link href="/">Home</Link></li>
            <li><Link href="">Contact</Link></li>
            
            
        </ul>


        <ul className="hidden grow-[1] md:flex lg:flex justify-evenly cursor-pointer">
           
           {/* <li><Link href="/login">Account</Link></li> */}
           <li><Link href="/cart"><span>Cart {totalQuantity}</span></Link></li>

        </ul>






    </nav>
  )
}

export default Navbar