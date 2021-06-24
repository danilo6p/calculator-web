import { Link } from 'react-router-dom'

import logo from '../assets/images/logo-h.svg'

import '../styles/navbar.scss'

export function Navbar() {
  return(
    <nav id='navbar'>
      <div className="nav-container">
        <img src={logo} alt="IMC" />
        <div className="nav-menu-wrapper">
          <ul className="nav-menu">
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