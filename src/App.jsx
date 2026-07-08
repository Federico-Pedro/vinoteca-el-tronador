import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/header/header'
import NavBar from './components/navBar/navBar'
import Carousel from './components/carousel/carousel'
import SocialSideBar from './components/socialSideBar/socialSideBar'
import ProductGrid from './components/productGrid/productGrid'
import Footer from './components/footer/footer'
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'


function App() {


  return (
    <BrowserRouter>
      <Header />  
      <NavBar />
      <Carousel />
      <SocialSideBar />
      <Routes>  

      </Routes>
      <ProductGrid />
      <FloatingWhatsApp
        phoneNumber="542494216514"
        accountName="eL TROnaDOR"
        avatar="src/assets/logo.png"
        statusMessage="Contestamos en 15 minutos"
        chatMessage="Hola! ¿En qué te podemos ayudar?"
      />
      
      <Footer />


    </BrowserRouter>
  )
}

export default App
