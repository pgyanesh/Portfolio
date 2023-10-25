import React from 'react'
import './ThirdPage.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaJsSquare} from 'react-icons/fa'
 import {FaReact} from 'react-icons/fa'
 import {SiRedux} from 'react-icons/si'
 import {SiMongodb} from 'react-icons/si'
 import {FaNode} from 'react-icons/fa'
 import {SiMysql} from 'react-icons/si'
const ThirdPage = () => {
  return (
    <div className='thirdPage-container'>
      <h1 className='thirdPage-head'>Skills</h1>
      <div className="thirdPage-icon">
        <FaHtml5  className='icons'/>
        <FaCss3Alt className='icons'/>
        <FaJsSquare className='icons'/>
        <FaReact className='icons'/>
        <SiRedux className='icons'/>
        <SiMongodb className='icons'/>
        <FaNode className='icons'/>
        <SiMysql className='icons'/>
      </div>
      
    </div>
  )
}

export default ThirdPage
