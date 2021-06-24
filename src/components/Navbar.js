import logo from '../assets/images/logo-h.svg'

export function Navbar() {
  return(
    <nav>
      <div id="navbar-container">
        <img src={logo} alt="IMC" />
      </div>
    </nav>
  )
}