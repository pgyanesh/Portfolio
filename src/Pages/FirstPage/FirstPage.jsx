import React from 'react'
import './First.css'
import Navbar from '../../Components/Navbar/Navbar'



const FirstPage = () => {
  return (
    <div className='first-page'>
      <Navbar/>
      <div className="heading">
        <h1>Hello,</h1>
      </div>
      <div className="firstPage-para1">
        <h2>I'm <span className='firstPara-span'>Gyanesh Kumar Padhiary</span></h2>
      </div>
      <div className="firstPage-para2">
        <h3><span className='secondPara-span'>{"<"}</span>Web Developer <span className='secondPara-span'>{"/>"}</span></h3>
      </div>
      <div className="social-icons">
        <a href='https://github.com/pgyanesh'>
       Github
        </a>
      </div>

    </div>
  )
}

export default FirstPage
