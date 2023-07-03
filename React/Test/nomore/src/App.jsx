import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './header'
import Mainb from './mainb'
import Footer from './footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />
<Mainb />
<Footer />
    </>
  )
}

export default App
