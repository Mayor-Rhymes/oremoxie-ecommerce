

import {createContext, useState, useContext} from 'react';


export const cartContext = createContext(null);



const CartContext = ({children}) => {
      const [cart, setCart] = useState([]);
      const [totalQuantity, setTotalQuantity] = useState(0);
      const [totalPrice, setTotalPrice] = useState(0);
    



      const addToCart = (product) => {
          
         let newCart;
         let quantity = totalQuantity;
         

         let productExists = cart.find(item => item._id === product._id);
         if(productExists) {
            newCart = cart.map((item) => {

                if(product._id === item._id){
                    quantity += 1;
                    return {...item, quantity: item.quantity + 1}
                    
                } else{
                    return item
                }
             
             })
        }

        else{

            newCart = [...cart, {...product, quantity: 1}]
            quantity += 1;
        }



          

        
          setCart(newCart);
          setTotalQuantity(quantity);

          let totalPrice = 0
          newCart.forEach((e) => {

              totalPrice += e.quantity * e.price
          })

          setTotalPrice(totalPrice)


          
      }


      const removeFromCart = (product) => {
          
        let newCart;
        let quantity = totalQuantity;
        

        let productExists = cart.find(item => item._id === product._id);
        if(productExists) {
           newCart = cart.map((item) => {

               if(product._id === item._id){
                   quantity -= 1;
                   return {...item, quantity: item.quantity - 1}
                   
               } 
               else{
                   return item
               }
            
            })
       }
       newCart = newCart.filter(item => item.quantity > 0)

       


         

       
         setCart(newCart);
         setTotalQuantity(quantity);

         let totalPrice = 0
          newCart.forEach((e) => {

              totalPrice += e.quantity * e.price
          })

          setTotalPrice(totalPrice)


         
     }


     const deleteProduct = (product) => {
            

            const productToDelete = cart.find(item => item._id === product._id)
            const newCart = cart.filter(item => item._id !== product._id)


            
            
            setCart(newCart)
            setTotalQuantity((prevState) => prevState - productToDelete.quantity)

            
            let totalPrice = 0
          newCart.forEach((e) => {

              totalPrice += e.quantity * e.price
          })

          setTotalPrice(totalPrice)


            


     }


     const resetCart = () => {

          setCart([])
          setTotalQuantity(0)
          setTotalPrice(0)

     }
      
      return(


        <cartContext.Provider value={{ cart, addToCart, removeFromCart, totalQuantity, deleteProduct, totalPrice, resetCart }}>


            {children}

        </cartContext.Provider>
      )

}

export const useCartContext = () => {



    const context = useContext(cartContext)

    if(context){

        return context;

    } else{

        return "Component is not defined within this context";
    }
}

export default CartContext