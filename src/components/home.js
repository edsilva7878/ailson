import React from 'react'
import {useHistory} from 'react-router-dom'
import '../components/home.css'
import FundoHome from './images/fundoHome.png'

export default function Home(){
    const history = useHistory()
    
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

    function partners(){
        return history.push('/partners')
    }
    
    return (
        <>
            <img src={FundoHome} className='fundoHome' alt='fundoHome'/>
            <div className='wrapperHome'>
                <div className='areaTitleHome'>
                    <h1>Ailson Tenório Advogado</h1>
                </div>
                <div className='menuHome'>
                    <button className='btnHome' onClick={() => home()}>home</button>
                    <button className='btnHome' onClick={() => about()}>SOBRE</button>
                    <button className='btnHome' onClick={() => services()}>SERVIÇOS</button>
                    <button className='btnHome' onClick={() => contact()}>CONTATO</button>
                    <button className='btnHome' onClick={() => partners()}>PARCEIROS</button>
                </div>
                <div className='contentHome'>
                </div>
                <div className='footerHome'>
                    <h5>Ailson Tenório Advogado 2021 - Todos os direitos reservados</h5>
                </div>
            </div>
        </>
    )
}