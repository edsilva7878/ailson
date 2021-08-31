import React from 'react'
import {useHistory} from 'react-router-dom'
import '../components/services.css'
import FundoServices from './images/fundoServices.png'

export default function Services(){
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
            <img src={FundoServices} className='fundoServices' alt='fundoServices' />
            <div className='wrapperServices'>
                <div className='areaTitleServices'>
                    <h1>SERVIÇOS</h1>
                </div>
                <div className='menuServices'>
                    <button className='btnServices' onClick={() => home()}>INICIO</button>
                    <button className='btnServices' onClick={() => about()}>SOBRE</button>
                    <button className='btnServices' onClick={() => services()}>SERVIÇOS</button>
                    <button className='btnServices' onClick={() => contact()}>CONTATO</button>
                    <button className='btnServices' onClick={() => partners()}>PARCEIROS</button>


                </div>
                <div className='contentServices'>
                    <div className='cardServices'>
                    <h1>TRABALHISTA</h1>
                        <p>O direito do trabalho, também chamado de direito trabalhista, 
                        é um ramo do direito privado que é responsável por regular a relação 
                        jurídica entre trabalhadores e empregadores, baseado nos princípios e 
                        leis trabalhistas. O direito do trabalho é um dos ramos do direito privado 
                        mais importantes para a sociedade.</p>
                    </div>
                    <div className='cardServices'>
                    <h1>CIVIL</h1>
                        <p>O Direito Civil lida com as relações jurídicas das pessoas físicas e 
                        jurídicas dentro da sociedade. O Código Civil, especificamente, lida com 
                        as questões da família, da vida e da morte da pessoa física, com a relação 
                        de propriedade, do casamento, entre outras.</p>
                    </div>
                    <div className='cardServices'>
                    <h1>FAMÍLIA</h1>
                        <p>Direito de família é um ramo do direito que trata das questões e litígios 
                        entre entes da comunidade familiar. ... O direito de família tem o objetivo de 
                        regular as regras, obrigações e direito no convívio familiar. São casos envolvendo 
                        casamento, separação, divórcio, guarda dos filhos, pensão alimentícia, adoção.</p>
                    </div>
                    <div className='cardServices'>
                    <h1>CONSUMIDOR</h1>
                        <p>O direito do trabalho, também chamado de direito trabalhista, 
                        é um ramo do direito privado que é responsável por regular a relação 
                        jurídica entre trabalhadores e empregadores, baseado nos princípios e 
                        leis trabalhistas. O direito do trabalho é um dos ramos do direito privado 
                        mais importantes para a sociedade.</p>
                    </div>
                    <div className='cardServices'>
                    <h1>TRIBUTÁRIO</h1>
                        <p>O direito do trabalho, também chamado de direito trabalhista, 
                        é um ramo do direito privado que é responsável por regular a relação 
                        jurídica entre trabalhadores e empregadores, baseado nos princípios e 
                        leis trabalhistas. O direito do trabalho é um dos ramos do direito privado 
                        mais importantes para a sociedade.</p>
                    </div>
                </div>
                <div className='footerServices'>
                    <h5>Ailson Tenório Advogado 2021 - Todos os direitos reservados</h5>
                </div>
            </div>
        </>
    )
}