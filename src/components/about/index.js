import React from 'react'
import './styles.css'
import FundoAbout from '../images/fundoAbout.png'
import FotoAdv from '../images/fotoAdv.png'
import Menu from '../menu/index'
import Footer from '../footer/index'

export default function About(){
    return (
        <div className='wrapper'>
            <img src={FundoAbout} className='fundoHome' alt='fundoHome'/>
            <Menu/>
            <div className='contentAbout'>
                <div className='cardAbout'>
                <div className='description'>
                    Ele é indispensável à administração da justiça, 
                    exerce função social, detém capacidade postulatória, 
                    defende os interesses das partes em juízo ou fora dele 
                    e presta assessoria e consultoria. Todo bacharel em direito, 
                    aprovado no respectivo exame de ordem, pode praticar qualquer 
                    uma dessas atividades.
                    </div>
                    <img src={FotoAdv} className='fotoAdv' alt='fotoAdv'/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
