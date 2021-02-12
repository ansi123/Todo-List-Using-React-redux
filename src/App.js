import React, { useState } from 'react'
import Home from './Home';
import {UserContext} from './UserContext';

const App = () => {
  const [value,setValue]  = useState(null)

  return (
    <UserContext.Provider value={{value,setValue}}>
       <Home/>
    </UserContext.Provider>
  )
}

export default App
