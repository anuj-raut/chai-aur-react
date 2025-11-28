import { useState } from 'react'
import Login from './components/Login'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
function App() {


  return (
    <UserContextProvider>
      <h1>React in Context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
