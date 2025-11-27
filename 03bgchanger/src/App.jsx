import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olives")
  
  //bydefault yha ph olive colour ha isye onlive colour shoo ho rha ha.
  
  //onClick always demend for function it does not need function return value it need full function.
  //setColor() bas nhi likh sakte ha ku ki yh ek function toh ha lakin yh joh return kre gh woh onClick nhi leh gh.
  //so for that it need callback function{()=>setColor("red")}.
      // aur yha ph function kh ander funtion call hua ha i.e. callbackfunction kh ander setcolor function call hua ha.
  
  return (
    <>
    <div className="w-full h-screen duration-200" backgrondColor:color>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setColor("Red")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Red"}}
        >Red</button>
        <button onClick={()=>setColor("Green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Green"}}
        >Green</button>
        <button onClick={()=>setColor("Blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Blue"}}
        >Blue</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
