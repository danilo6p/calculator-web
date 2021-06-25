import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes  } from 'react-icons/fa'

import logo from '../../assets/images/logo-h.svg'

import './styles.scss'

export function Navbar() {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  return(
    <nav id='navbar'>
      <div className="nav-container">
        <Link to='/calculate'><img src={logo} alt="IMC" /></Link>
        <div className="hamburger-menu" onClick={handleClick}>
            { click ? (<FaTimes />) : (<FaBars />)}
        </div>
        <div className="nav-menu-wrapper">
          <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/calculate' className="nav-link">Calcular</Link>
            </li>
            <li className="nav-item">
              <Link to='/results' className="nav-link">Resultados</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link">Saiba mais</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}