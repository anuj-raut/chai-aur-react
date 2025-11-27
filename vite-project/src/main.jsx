import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Anuj Kumar</h1>
    </div>
  )
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
   

    // anotherElement
    reactElement
  )

  //{/* //App ek function ha joh imort hua ha app.jsx sh */}
//     {/* <MyApp />  */}
//  {/* MyApp() */}
//     {/* In this way also MyApp can be written because MyApp is a function */}