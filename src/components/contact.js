import React from 'react'
import {useHistory} from 'react-router-dom'
import '../components/contact.css'
import FundoContact from './images/fundoContact.png'
import Form from './images/form.png'
import Midias from './images/midias.png'

export default function Contact(){
    const history = useHistory()
    
    function partners(){
        return history.push('/partners')
    }
    function home(){
        return history.push('/')
    }

    function about(){
        return history.push('/about')
    }

    function services(){
        return history.push('/services')
    }

    function contact(){
        return history.push('/contact')
    }
    

    return (
        <>
            <img src={FundoContact} className='fundoContact' alt='fundoContact' />
            <div className='wrapperContact'>
                <div className='areaTitleContact'>
                    <h1>CONTATOS</h1>
                </div>
                <div className='menuContact'>
                    <button className='btnContact' onClick={() => home()}>INICIO</button>
                    <button className='btnContact' onClick={() => about()}>SOBRE</button>
                    <button className='btnContact' onClick={() => services()}>SERVIÇOS</button>
                    <button className='btnContact' onClick={() => contact()}>CONTATOS</button>
                    <button className='btnContact' onClick={() => partners()}>PARCEIROS</button>
                    
                </div>
                <div className='contentContact'>
                        <img src={Form} className='form' alt='form'/>
                       
                </div>
                <div className='footerContact'>
                <img src={Midias} className='midias' alt='midias'/>
                </div>
            </div>
        </>
    )
}