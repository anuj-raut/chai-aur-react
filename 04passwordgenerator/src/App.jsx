import { useState ,useCallback,useEffect, useRef} from 'react'import './App.css'

function App() {
  const [length ,setLength] = useState(8)
  //number allowed matlab joh password generate ho gh usmh numbers bhi include ho gh.
 const [numberAllowed ,setNumberAllowed] = useState(false);
  //char allowed matlab joh password generate ho gh usmh character bhi include ho gh.
 const [charAllowed ,setCharAllowed] = useState(false);
 const [password ,setPassword] = useState("");

 //useRef hook
 const passwordRef=useRef(null)

 //yha ph yh toh normal function bna loh yh phir arrow function bna loh.
 //const passwordGenerator=useCallback ( ()=>{},[length,numberAllowed,charAllowed,setPassword])
 
 //working dekh lena
 function fn(){
   let pass=""
   //Right now, password is empty.

   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    //👉 If the user wants numbers in the password, you attach numbers to str.

    if(charAllowed) str+="(){}!@#$%^&*_-=+/*`~"
    //👉 If the user wants char in the password, you attach char to str.

    for (let i = 1;i<= length; i++){
       let char=Math.floor(Math.random()*str.length+1)
       pass+=str.charAt(char)}

       setPassword(pass)

 }
 // yha ph setPassword jaurri nhi ha.
 const passwordGenerator=useCallback(fn,[length,numberAllowed,charAllowed,setPassword])

 //yha ph bass passwod diye ha ku ki hmko bass yha ph password sh matlab ha matlab ki uske change ho nh ph.


 const copyPasswordToClipboard=useCallback(()=>{

//Why to use CallBack()
//   React says:
// “This function (passwordGenerator) ko yaad rakh lo.
// Har re-render pe naya MAT banao.
// Sirf tab function badlo jab koi dependency change ho.”
  passwordRef.current?.select()
  
  //yh bas una k=he select kre gh jitna kh range bhaje gh
  passwordRef.current?.setSelectionRange(0,6)
  window.navigator.clipboard.writeText(password)
 },[password])

//  ✅ PART 2 — useCallback for passwordGenerator(fn)
//  React says:

// “This function (passwordGenerator) ko yaad rakh lo.
// Har re-render pe naya MAT banao.
// Sirf tab function badlo jab koi dependency change ho.”

//  With useCallback:
// Function same rahta hai
// useEffect sirf tab run hota hai jab dependencies change hoti hain

 
 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator]) 

//WHY TO USE USEEFFECT...
//  ⭐ WHY useEffect?
// Because you want:
// 👉 password to update automatically when settings change
// User does NOT need to click any button.

 //Difference between useCallback(fn,[length,numberAllowed,/charAllowed,setPassword])
 //  useEffect(()=>{
 //   passwordGenerator()
 //  },[length,numberAllowed,charAllowed,passwordGenerator]) 

  return (
    <>
    <div className='w-full max-w-md mx-autio shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gra\y-800'>
    
    <div class>

    </div>
    </div>
    </>
  )
}

export default App

// Why useCallback here?

// Because you are using passwordGenerator inside useEffect.

// If you DON’T use useCallback:

// React will create a new passwordGenerator function on every render.

// useEffect will think function changed

// useEffect will run → generating password again and again (infinite loop risk)

// So useCallback prevents unnecessary re-runs.




// Depending on TRUE / FALSE values, str becomes:

// Case 1: Only letters

// "ABC...xyz"

// Case 2: Letters + numbers

// "ABC...xyz0123456789"

// Case 3: Letters + symbols

// "ABC...xyz(){}!@#$%^&*_-=+/*~"`

// Case 4: Letters + numbers + symbols

// "ABC...xyz0123456789(){}!@#$%^&*_-=+/*~"`
