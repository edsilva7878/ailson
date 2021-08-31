import React from 'react'
import {useHistory} from 'react-router-dom'
import '../components/about.css'
import FundoAbout from './images/fundoAbout.png'
import FotoAdv from './images/fotoAdv.png'

export default function About(){
    const history = useHistory()
    
   

    function contact(){
        return history.push('/contact')
    }

    function partners(){
        return history.push('/partners')
    }
    function home(){
        return history.push('/')
    }

    function services(){
        return history.push('/services')
    }

    function about(){
        return history.push('/about')
    }
    
    return (
        <>
            <img src={FundoAbout} className='fundoAbout' alt='fundoAbout' />
            <div className='wrapperAbout'>
                <div className='areaTitleAbout'>
                    <h1>SOBRE</h1>
                </div>
                <div className='menuAbout'>
                    <button className='btnAbout' onClick={() => home()}>INICIO</button>
                    <button className='btnAbout' onClick={() => about()}>SOBRE</button>
                    <button className='btnAbout' onClick={() => services()}>SERVIÇOS</button>
                    <button className='btnAbout' onClick={() => contact()}>CONTATO</button>
                    <button className='btnAbout' onClick={() => partners()}>PARCEIROS</button>
                </div>
                <div className='contentAbout'>
                    <div className='cardAbout'>
                        <img src={FotoAdv} className='fotoAdv' alt='fotoAdv'/>
                        <p>Um advogado é um profissional liberal, graduado em Direito 
                        e autorizado pelas instituições competentes de cada país a exercer 
                        o jus postulandi, ou seja, a representação dos legítimos interesses 
                        das pessoas físicas ou jurídicas em juízo ou fora dele, quer entre si, 
                        quer ante o Estado.</p>
                    </div>
                  
                </div>
                <div className='footerAbout'>
                    <h5>Ailson Tenório Advogado 2021 - Todos os direitos reservados</h5>
                </div>
            </div>
        </>
    )
}