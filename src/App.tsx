import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './scenes/navbar'

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  return (
    <div className="app bg-gray-20">
     <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
