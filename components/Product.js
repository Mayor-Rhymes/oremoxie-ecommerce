// import Image from "next/image"
import {urlFor} from '../lib/client';



import {useCartContext} from '../context/CartContext'


const Product = ({product}) => {

  const {addToCart} = useCartContext()
  
  return (

    <div 
    className=
    "flex flex-col space-y-4 py-5 px-14 items-center justify-center rounded-md transition duration-200 ease-in-out hover:shadow-md hover:-translate-y-10">
        

        <img src={urlFor(product.image && product.image[0])} alt="product-image" className="w-[100px] h-[100px]"/>
        <h3 className="text-lg text-black">{product.name}</h3>
        {/* <p>{product.details}</p> */}
        <p className="text-orange-300">{product.price} NGN</p>
        <p>Available Stock: {product.stock}</p>

        <div className="flex space-x-4">
            
            {product?.color?.map((color) => 
                (<p className={`rounded-[50px] bg-${color.toLowerCase()}-100 h-10 w-10 cursor-pointer`} key={color}></p>)
            )}
            
        </div>

        {/* <button className="bg-green-400 px-4 py-2 rounded-sm text-white">Buy Now</button> */}

        <button className="bg-citrine px-4 py-2 rounded-sm text-white w-[100%]" onClick={() => addToCart(product)}>Add To Cart</button>

        


    </div>
  )
}

export default Product