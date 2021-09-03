import React from 'react'
import './styles.css'
import Partner1 from '../images/partner1.png'
import Partner2 from '../images/partner2.png'
export default function Parceiros(){
    return (
                <div className='partners'>
                    <div className='partnersLine1'>
                        <div className='cardPartners'>
                            <img src={Partner1} alt='partner1'/>
                            <p>CORRETOR DE SEGUROS</p>
                        </div>
                        <div className='cardPartners'>
                            <img src={Partner2} alt='partner1'/>
                                <p>CONTADOR ONLINE</p>
                        </div>
                        <div className='cardPartners'>
                            <img src={Partner1} alt='partner1'/>
                                <p>DESENVOLVEDOR WEB</p>
                        </div>
                        <div className='cardPartners'>
                            <img src={Partner1} alt='partner1'/>
                                <p>DESENVOLVEDOR WEB</p>
                        </div>
                     
                    </div>
                    <div className='partnersLine2'>
                        <div className='cardPartners'>
                            <img src={Partner1} alt='partner1'/>
                            <p>DESENVOLVEDOR WEB</p>
                        </div>
                        <div className='cardPartners'>
                            <img src={Partner1} alt='partner1'/>
                                <p>DESENVOLVEDOR WEB</p>
                        </div>
                        <div className='cardPartners'>
                            <img src={Partner1} alt='partner1'/>
                                <p>DESENVOLVEDOR WEB</p>
                        </div>
                        <div className='cardPartners'>
                            <img src={Partner1} alt='partner1'/>
                                <p>DESENVOLVEDOR WEB</p>
                        </div>
                     
                    </div>
                </div>
                
    )
}