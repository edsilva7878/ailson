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
                    <h1 className='textCard'>EXPERIÊNCIA</h1>
                </div>
                <div className='card2'>
                <h1 className='textCard'>CREDIBILIDADE</h1>
                </div>
                <div className='card3'>
                <h1 className='textCard'>TRANSPARÊNCIA</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
