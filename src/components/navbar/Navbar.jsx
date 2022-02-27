import React, { useState } from 'react'
import me from '../../img/signature (2).png'
import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <div className='n'>

            <nav className='main-nav'>
                <div className='logo'>
                    <img src={me} alt="" />
                </div>
                <div className='menu-link'>
                    <ul className='list'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="https://github.com/imnrb" target="_" >
                            <FaGithub />
                        </a>
                        </li>
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar