// import { Link } from 'react-router-dom'

import './styles.scss'

export function ImcCard({imc, rating, weight, height}) {
  return(
    <div className="card-container">
      <div className="card-header">
        {
          imc.length > 0 ? (
            <p>IMC = {weight} ÷ ({height} x {height})</p>
         ) : (
           <p>IMC = peso / (altura x altura)</p>
         )
        }
      </div>
      <div className="card-body">
        {
          imc > 0 ? <>
            <h1>{imc} <span>({rating})</span></h1>
          </> : (
            <h1>IMC</h1>
          )
        }
        {/* <Link to='/results'>mais resultados</Link> */}
      </div>
    </div>
  )
}