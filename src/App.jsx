import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from "./assets/vite.svg";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/sarveshdevrukhkar" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://sarveshdevrukhkar.github.io" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hi, I am Sarvesh Devrukhkar.</h1>
      <h2>This is my Portfolio Website using Vite + React.</h2>
      <h2>Currently, it is Under Construction!</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
