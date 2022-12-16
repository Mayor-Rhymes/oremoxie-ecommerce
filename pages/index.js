



import {Hero, Products} from '../components'
import {client} from '../lib/client';
// import { useSession } from 'next-auth/react';

export default function Home({products}) {

  // const {data: session} = useSession({required: true})
  // if(session){
     return (
        <div>

          <Hero />

          <Products products={products}/>
      
       </div>
      )
  // } else{
     

  // }

}


export const getServerSideProps = async () => {


  const products = await client.fetch('*[_type == "product"]')

  
  return {

      props: {

          products
      }
  }

 
}

