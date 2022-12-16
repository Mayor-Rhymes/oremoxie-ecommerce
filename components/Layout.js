

import {Navbar} from './';
const Layout = ({children}) => {

   return(
      <div>
        <Navbar />

        <div>
           
           {children}

        </div>


        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
        
      </div>
   )

}

export default Layout;