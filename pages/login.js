

import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const login = () => {
 

  const {data: session}  = useSession()


  console.log(session)
  if(session){

    return(
    <div style={{ marginTop: '100px' }}>

        <p>Welcome, {session.user?.name}</p>

        <button onClick={() => signOut()}>Sign Out</button>

    </div>
    )
  }


  else{

    return (
    <div>
        <p>Please sign in</p>
        <button onClick={() => signIn()}>Sign In</button>
    </div>
    )
  }
}

export default login




