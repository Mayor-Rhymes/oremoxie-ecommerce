import {useCartContext} from '../../context/CartContext';
import { useState } from 'react';
import Image from 'next/Image';

import {urlFor} from '../../lib/client';

import { usePaystackPayment } from 'react-paystack';




const Cart = () => {
   
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [success, setSuccess] = useState(false);
    const {cart, addToCart, removeFromCart, deleteProduct, totalPrice, resetCart} = useCartContext();
    console.log(cart);
    console.log(totalPrice)




    const config = {
      reference: (new Date()).getTime().toString(),
      email: email,
      amount: totalPrice * 100,
      publicKey: "pk_test_11e2996b298648e74c05a3caadbc2f3479a27e92",
      metadata: {

        cart: cart,
        address: address,

        
      }
      

    };
    

    const onSuccess = async (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
      setVisible(false)
      await addToDatabase()



    };

    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
      
      // setSuccess(false)
    }

    const CheckOut = () => {
      
     
      const initializePayment = usePaystackPayment(config);

      
      return (
        
            <button onClick={async () => {
                initializePayment(onSuccess, onClose);
                


            }} className="bg-green-400 text-white p-4 rounded-sm">Pay Now</button>
        
      )
    };
    



    const addToDatabase = async () => {
       
       const response = await fetch('api/cart', { 

          method: 'POST',
          headers: {

            'Content-Type': 'application/json'
          },
          body: JSON.stringify({

              email,
              address,
              phoneNumber,
              products: cart.map(item => {

                return {
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity
                }
              })

          })

      
      })
    

      if(!response.ok){

        console.log(response.formData)
      }
      const json = await response.json();


      console.log(json);
      setEmail('');
      setAddress('');
      setPhoneNumber('');
      resetCart();

    }


    


  if(totalPrice > 0){

   return(
     <>

     {visible && <div className="absolute h-[900px] w-[100%] bg-slate-600 z-10">
             


     </div>}

     {visible && <div className="absolute flex flex-col space-y-5 left-[35%] top-[20%] justify-center bg-white text-white w-[500px] py-14 px-10 rounded-md z-40">
         

         <input type="email" placeholder="Enter email address" className="h-[50px] p-5 text-black outline-none rounded-sm border-2 " value={email} onChange={(e) => setEmail(e.target.value)}/>

         <input type="text" placeholder="Enter phone number" className="h-[50px] p-5 text-black outline-none rounded-sm border-2 " value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>

         <textarea type="address" placeholder="Enter street address" className="h-[200px] p-5 text-black outline-none border-2 resize-none rounded-sm" value={address} onChange={(e) => setAddress(e.target.value)}/>

         {/* <button className="bg-blue-400 text-white p-4">Enter</button> */}
         <CheckOut />

         <button onClick={() => setVisible(false)} className="bg-red-400 text-white p-4 rounded-sm">Close</button>


     </div>}
     <div className="flex justify-evenly">


      
     <div className="flex space-y-10 flex-col item-center pt-4 pl-4 pb-4">


       
       
       {cart?.map(item => 
        
          <div className="flex space-x-5 justify-center items-center" key={item._id}>
            <img src={urlFor(item.image && item.image[0])} alt="product-image" className="h-[150px] w-[150px] rounded-md"/>
            

            <div className="flex flex-col space-y-4">
              
              <p>{item.name}</p>
              <p> NGN {item.price}</p>


              <div className="flex space-x-4 ">
                  <button className="bg-blue-400 px-4 text-center text-white rounded-sm" onClick={() => addToCart(item)}>+</button>
                  <p>{item.quantity}</p>
                  <button className="bg-red-400 px-4 text-center text-white rounded-sm" onClick={() => removeFromCart(item)}>-</button>
              </div>

              <button className="bg-red-400 text-white text-center px-6 py-2 rounded-md" onClick={() => deleteProduct(item)}>DELETE</button>
            </div>


             
            
          </div>


        
        )}


       
        
        <div className="flex flex-col pt-20 item-center space-y-10 ">
          {totalPrice ? <p>Total: {totalPrice} </p> : ""}


          {totalPrice ? <button className="bg-blue-400 text-white text-center px-6 py-2 rounded-md" onClick={() => setVisible(true)}>Checkout</button> : ""}
        </div>

       

     </div>

       
     </div>
     </>



   )
  } else{

     return <h1 className="text-center pt-10 text-3xl">There are no products in your cart, yet</h1>

  }
}


export default Cart;