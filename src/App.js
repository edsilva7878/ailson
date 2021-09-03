import React from 'react'
import Home from './components/home/index'
import About from './components/about/index'
import Services from './components/services/index'
import Parceiros from './components/parceiros/index'
import Footer from './components/footer/index'
export default function App() {
  return (
    
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Parceiros/>
      <Footer/>
    </div>
  );
}

