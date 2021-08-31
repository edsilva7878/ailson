import React from 'react'
import {useHistory} from 'react-router-dom'
import '../components/partners.css'

export default function Partners(){
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
            <img src='' className='fundoPartners' alt='fundoPartners'/>
            <div className='wrapperPartners'>
                <div className='areaTitlePartners'>
                    <h1>EM MANUTENÇÃO!!!</h1>
                </div>
                <div className='menuPartners'>
                    <button className='btnPartners' onClick={() => home()}>home</button>
                    <button className='btnPartners' onClick={() => about()}>SOBRE</button>
                    <button className='btnPartners' onClick={() => services()}>SERVIÇOS</button>
                    <button className='btnPartners' onClick={() => contact()}>CONTATO</button>
                    <button className='btnPartners' onClick={() => partners()}>PARCEIROS</button>
                </div>
                <div className='contentPartners'>
                </div>
                <div className='footerPartners'>
                    <h5>Ailson Tenório Advogado 2021 - Todos os direitos reservados</h5>
                </div>
            </div>
        </>
    )
}