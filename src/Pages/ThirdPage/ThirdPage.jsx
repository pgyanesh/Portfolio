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
          <ul>
            <li className='skills-li'><FaHtml5/></li>
            <li className='skills-li'><FaCss3Alt/></li>
            <li className='skills-li'><FaJsSquare/></li>
            <li className='skills-li'><FaReact/></li>
            <li className='skills-li'><FaNode/></li>
            <li className='skills-li'><SiMongodb/></li>
            <li className='skills-li'><SiMysql/></li>
            <li className='skills-li'><SiRedux/></li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default ThirdPage
