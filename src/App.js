import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';
import { UC, LC, NC, SC} from './data/PassChar'


function App() {
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbols, setSymbols] = useState(false)
  let [passLength, setPasslength] = useState(10)
  let [fPass, setPass] =useState('')

  let createPassword=() => {
    let finalPass = ''
    let charSet = ''
      if(uppercase || lowercase || number || symbols) {
        if(uppercase) charSet+= UC;
        if(lowercase) charSet+= LC;
        if(symbols) charSet+= SC;
        if(number) charSet += NC;

        for(let i=0; i<passLength; i++){
          finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
        setPass(finalPass)
      }

  else {
    toast.error('select atleast one character')
  }
}
let copyPass =()=> {
  navigator.clipboard.writeText(fPass)
  toast.success('Password copied to clipboard')
}

  return (
  <>
    <ToastContainer/>
      <div className='passwordBox'>
        <h2>Pssword Generator</h2>

        <div className='passwordBoxin'>
          <input type='text' value={fPass} readOnly/> <button onClick={copyPass}>Copy</button>
        </div>
        <div className='passLength'>
          <label>Password Length:</label>
          <input type='number' max={20} min={10} value={passLength} onChange={(event)=> setPasslength(event.target.value)}/>
        </div>
        <div className='passLength'>
          <label>Include uppercase letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=> setUppercase(!uppercase)}/>
        </div>
        <div className='passLength'>
          <label>Include lowercase letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=> setLowercase(!lowercase)}/>
        </div>
        <div className='passLength'>
          <label>Include numbers</label>
          <input type='checkbox' checked={number} onChange={()=> setNumber(!number)}/>
        </div>
        <div className='passLength'>
          <label>Include symbols</label>
          <input type='checkbox' checked={symbols} onChange={()=> setSymbols(!symbols)}/>
        </div>
        <button className='btn' onClick={createPassword}>Generate Passowrd</button>
      </div>
    </>
  );
}

export default App;
