
import Product from './Product';





const Products = ({products}) => {

   return(
     
    

      <div className="flex flex-col px-10 space-y-4 justify-center lg:grid lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10 py-4 lg:place-items-center">

         {products?.map((product) => 
         
            <Product product={product} key={product._id}/>
         
         )}

      </div>
   )
}





export default Products;