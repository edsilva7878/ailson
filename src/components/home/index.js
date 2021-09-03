import React from 'react'
import './styles.css'
import Menu from '../menu/index'
import Footer from '../footer/index'
export default function Home(){
    return (
        <div className='wrapper'>
            <Menu className='menu'/>
            <Footer className='footer'/>
        </div>
    )
}