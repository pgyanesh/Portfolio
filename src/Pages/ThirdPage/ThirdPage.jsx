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
    <>
    <div className='thirdPage-container'>
        <div className='thirdPage-heading'>
            <h1>Skills</h1>
        </div>
        <div className="thirdPage-skills">
         
            <div className="skills"><FaHtml5 className='icons'/><span className='skill-span'>Html</span></div>
            <div className="skills"><FaCss3Alt className='icons'/><span className='skill-span'>Css</span></div>
            <div className="skills"><FaJsSquare className='icons'/><span className='skill-span'>Javascript</span></div>
            <div className="skills"><FaReact className='icons'/><span className='skill-span'>React</span></div>
            <div className="skills"><FaNode className='icons'/><span className='skill-span'>Node Js</span></div>
          <div className="skills"><SiMongodb className='icons'/><span className='skill-span'>Mongodb</span></div>
           <div className="skills"><SiMysql className='icons'/><span className='skill-span'>MySql</span></div>
            <div className="skills"><SiRedux className='icons'/><span className='skill-span'>Redux</span></div>
          
        </div>
    </div>
    </>
  )
}

export default ThirdPage
