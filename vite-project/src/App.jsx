// import { useState } from 'react';  // ✅ Import useState
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//   <div>
//     <h1>Chai aur React</h1>
//     <h2>Anuj welcome</h2>
//     <h1>Chai aur React</h1>
//   </div>
// )}
// export default App;

import Chai from "./Chai"
function App() {
  const username="chai aur code"
  return (
    <> //In react it is known as Fragment
    <Chai/>
    <h1>Hello Anuj {username}</h1>
    <p>Today i am learning React</p>
    </> 
  )
}
export default App;