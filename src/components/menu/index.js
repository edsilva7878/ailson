import React from 'react'
import './styles.css'
import Logo from '../images/logo.png'
import Midias from '../images/midiasContact.png'

export default function Menu(){
    return (
        <div className='menu'>
            <div className='subTop'>
            &nbsp; 
                Fale conosco (11) 2935-3972 | 
                ailsontenorioadv@gmail.com | 
                Atendimento - seg a sex das 09 às 17hs 
                <div className='submenu'> HOME | SOBRE | SERVIÇOS | PARCEIROS </div>

                <img src={Midias} alt='midias'/>
            </div>
            <div className='lineA'></div>
            <div className='top'>
                <img src={Logo} alt='logo'/>Ailson Tenório
            </div>
            <div className='lineB'></div>
        </div>
    )
}