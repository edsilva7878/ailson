import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Logo from '../images/logo.png'
import Midias from '../images/midias.png'

export default function Home(){
    return (
            <div className='top'>
                <div className='subMenu'>
                    <div className='text'>
                        Fale conosco | 
                        (11) 2935-3972 | 
                        ailsontenorioadv@gmail.com | 
                        Atendimento - Seg a Sex das 09 às 17hs
                    </div>
                    <nav className='links'>
                        <Link to="/" className='link'>HOME</Link>
                        <Link to="/about" className='link'>SOBRE</Link>
                        <Link to="/services" className='link'>SERVIÇOS</Link>
                     </nav>
                    <img src={Midias} className='midias' alt='midias'/>
                </div>
                <div className='menu'> 
                    <img src={Logo} className='logo' alt='logo'/>Dr. Ailson Tenório
                </div>
            </div>
    )
}

