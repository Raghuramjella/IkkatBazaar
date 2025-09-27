

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
