// import { Link } from 'react-router-dom'

import './styles.scss'

export function ImcCard({imc, index}) {
  return(
    <div className="card-container">
      <div className="card-header">
        {
          imc.length > 0 ? (
            <p>IMC = {imc[index].weight} ÷ ({imc[index].height} x {imc[index].height})</p>
         ) : (
           <p>IMC = peso / (altura x altura)</p>
         )
        }
      </div>
      <div className="card-body">
        {
          imc.length > 0 ? (
            <h1>{imc[index].imc} <span>({imc[index].rating})</span></h1>
          ) : (
            <h1>IMC</h1>
          )
        }
        {/* <Link to='/results'>mais resultados</Link> */}
      </div>
    </div>
  )
}