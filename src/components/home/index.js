import React from 'react'
import './styles.css'
import FundoHome from '../images/fundoHome.png'
import Menu from '../menu/index'
import Footer from '../footer/index'

export default function Home(){
    return (
        <div className='wrapper'>
            <img src={FundoHome} className='fundoHome' alt='fundoHome'/>
            <Menu/>
            <div className='content'>
                <div className='card1'>
                    EXPERIÊNCIA
                </div>
                <div className='card2'>
                  CREDIBILIDADE
                </div>
                <div className='card3'>
                    TRASNPARÊNCIA
                </div>
            </div>
            <Footer/>
        </div>
    )
}
