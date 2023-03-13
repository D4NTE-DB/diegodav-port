import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppNavBar from './components/AppNavBar'
import Products from './pages/Products'
import LearnWithUs from './pages/LearnWithUs'

function App() {
  const [count, setCount] = useState(0)



  return (
    <HashRouter>
      <AppNavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/learn" element={<LearnWithUs />} />
      </Routes>
    </HashRouter>
  )
}

export default App
