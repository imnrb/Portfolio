import React from 'react'
import me from '../../img/signature (2).png'
import './navbar.css'
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div div className="i">
     <nav className='main-nav'>
        <div className='logo'>
          <img src={me} alt="" />
        </div>
        <div className='menu-link'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="https://github.com/imnrb" target="_" >
                   <FaGithub/>
                </a>
                </li>
            </ul>
        </div>
     </nav>
    </div>
  )
}

export default Navbar