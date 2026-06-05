import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [isCopied, setIsCopied] = useState(false);
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charactorAllowed, setCharactorAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charactorAllowed) str += "!@#$%^&*_-+=?.";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charactorAllowed, setPassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    setIsCopied(true)
  }, [password])


  useEffect(() => {
    if (!isCopied) return;

    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  useEffect(() => {
    const timer = setTimeout(() => {
      passwordGenerator();
    }, 0);

    return () => clearTimeout(timer);
  }, [length, numberAllowed, charactorAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500' >
        <h1 className='text-white text-center my-3'> Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white text-gray-800'
            placeholder='password'
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none px-3 py-1 shrink-0 font-medium text-sm transition-all text-white
              ${isCopied ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-700 hover:bg-blue-800 active:bg-blue-900'}`}>  
               {isCopied ? "Copied!" : "Copy"}</button>
        </div>
        <div className='flex text-sm gap-x-4 text-white font-medium justify-between mt-4'>


          <div className='flex items-center gap-x-1.5'>
            <input
              type="range"
              min={6}
              max={18}
              value={length}
              onChange={(e) => { setLength(Number(e.target.value)) }}
              className='cursor-pointer accent-blue-600'
            />
            <label className='shrink-0'>Length: {length}</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev) => !prev); }}
              className='cursor-pointer accent-blue-600 w-4 h-4'
            />
            <label htmlFor='numberInput' className='cursor-pointer select-none'>Numbers</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charactorAllowed}
              id='characterInput'
              onChange={() => { setCharactorAllowed((prev) => !prev); }}
              className='cursor-pointer accent-blue-600 w-4 h-4'
            />
            <label htmlFor='characterInput' className='cursor-pointer select-none'>Characters</label>
          </div>

        </div>


      </div>
    </>
  )
}
export default App
