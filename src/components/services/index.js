import React from 'react'
import './styles.css'
import FundoServices from '../images/fundoServices.png'
import Menu from '../menu/index'
import Footer from '../footer/index'

export default function Services(){
    return (
        <div className='wrapper'>
            <img src={FundoServices} className='fundoHome' alt='fundoHome'/>
            <Menu/>
            <div className='contentServices'>
                <div className='cardServices'>
                    <div>
                        <h2>TRABALHISTA</h2><br/>
                    </div>
                    <div>
                        <li>RESCISÃO INDIRETA</li>
                        <li>VERBAS TRABALHISTA</li>
                        <li>AUSÊNCIA DE REGISTRO</li>
                        <li>INSALUBRIDADE</li>
                        <li>PERICULOSIDADE</li>
                        <li>PAGAMENTO POR FORA</li>
                        <li>DEMISSÃO DE GESTANTE</li>
                        <li>ACIDENTADOS </li> 
                        <li>ESTABILIDADE</li>
                        <li>EQUIPARAÇÃO SALARIAL</li>
                        <li>ACÚMULO DE FUNÇÃO </li>
                        <li>REVERSÃO DE JUSTA CAUSA</li>
                        <li>HORA EXTRA</li>
                        <li>ASSÉDIO MORAL</li>
                    </div>
                </div>
                <div className='cardServices'>
                <div><h2>CONSUMIDOR</h2></div><br/>
                    <div>
                        <li>RELAÇÃO DE CONSUMO</li>
                        <li>EMPRÉSTIMOS</li>
                        <li>CONSIGNADOS</li>
                        <li>BANCÁRIOS</li>
                        <li>EMPRESAS ÁEREAS</li>
                        <li>RESTRIÇÕES INDEVIDAS (SERASA)</li>
                        <li>DANO MORAL E MATERIAL</li>
                        <li>COBRANÇAS INDEVIDAS</li>
                        <li>DESCUMPRIMENTO DE CONTRATO</li>
                        <li>CLONAGEM DE CONTA E CARTÃO</li>
                    </div>
                </div>
                <div className='cardServices'>
                <div><h2>CIVIL E FAMILIA</h2></div><br/>
                <div>

                        <li>RESPONSABILIDADE CIVIL</li>
                        <li>ACORDOS</li>
                        <li>AÇÃO DE COBRANÇA</li>
                        <li>LOCAÇÃO</li>
                        <li>CONTRATOS EM GERAL</li>
                        <li>INDENIZAÇÕES</li>
                        <li>DIVÓRCIO CONSENSUAL</li>
                        <li>DIVÓRCIO LITIGIOSO</li>
                        <li>UNIÃO ESTÁVEL</li>
                        <li>INVENTÁRIO JUDICIAL</li>
                        <li>INVENTÁRIO EXTRAJUDICIAL</li>
                        <li>AÇÃO DE ALIMENTOS</li>
                        <li>PENSÃO</li>
                        <li>GUARDA DE MENORES</li>
                        <li>REVISÃO DE PENSÃO</li>
                        <li>INVESTIGAÇÃO DE PATERNIDADE</li>
                        <li>INTERDIÇÃO</li>
                        <li>PARTILHA DE BENS</li>
                  
                    </div>
                </div>
                <div className='cardServices'>
                <div><h2>TRIBUTÁRIO</h2></div><br/>
                <div>
                        <li>COMPENSAÇÃO DE TRIBUTOS</li>
                        <li>EXECUÇÕES FISCAIS</li>
                        <li>DEFESA DE AUTUAÇÃO FISCAL</li>
                        <li>PARCELAMENTOS</li>
                        <li>PEDIDOS DE RESTITUIÇÃO</li>
                        <li>GESTÃO DE PASSIVO TRIBUTÁRIO</li>
                        <li>LEVANTAMENTO DE CRÉDITO</li>
            
                    </div>
                </div>
             
            </div>
            <Footer/>
        </div>
    )
}