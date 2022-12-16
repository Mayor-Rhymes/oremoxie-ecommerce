import '../styles/globals.css'
import {Layout} from '../components';
import CartContext from '../context/CartContext';
// import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps, session }) {
  return(
    // <SessionProvider session={session}>
     <CartContext>
       <Layout>
      
         <Component {...pageProps}/>
      
       </Layout>
     </CartContext>
    // </SessionProvider>
  )
}

export default MyApp
