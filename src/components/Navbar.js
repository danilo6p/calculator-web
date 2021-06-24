import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes  } from 'react-icons/fa'

import logo from '../assets/images/logo-h.svg'

import '../styles/navbar.scss'

export function Navbar() {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  return(
    <nav id='navbar'>
      <div className="nav-container">
        <img src={logo} alt="IMC" />
        <div className="hamburger-menu" onClick={handleClick}>
            { click ? (<FaTimes />) : (<FaBars />)}
        </div>
        <div className="nav-menu-wrapper">
          <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link path='/calculate' className="nav-link">Calcular</Link>
            </li>
            <li className="nav-item">
              <Link path='/results' className="nav-link">Resultados</Link>
            </li>
            <li className="nav-item">
              <Link path='/about' className="nav-link">Saiba mais</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}