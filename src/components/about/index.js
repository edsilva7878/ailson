import React from 'react'
import './styles.css'
import Ailson from '../images/fotoAdv.png'

export default function About(){
    return (
                <div className='about'>
                    <div className='cardAbout'>
                        <img src={Ailson} alt='ailson'/>
                        <p>Um advogado é um profissional liberal, 
                        graduado em Direito e autorizado pelas 
                        instituições competentes de cada país a exercer 
                        o jus postulandi, ou seja, a representação dos 
                        legítimos interesses das pessoas físicas ou jurídicas 
                        em juízo ou fora dele, quer entre si, quer ante o Estado.</p>
                    </div>
                </div>
    )
}