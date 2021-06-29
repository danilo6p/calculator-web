import { useContext } from "react"
import { Toaster } from "react-hot-toast"

import { ImcContext } from "../../context/ImcContext"
import { Navbar } from "../../components/Navbar"
import { ImcCard } from "../../components/ImcCard"

import resultsImg from "../../assets/images/results.svg"

import "./styles.scss"

export function Results() {
  const { imc } = useContext(ImcContext)

  return(
    <>
    {console.log(imc)}
      <div><Toaster/></div>
      <Navbar />
      <div id="results-page">
        <div className="results-container">
          <h1>Seus últimos resultados</h1>
          {
            imc.length > 0 ? (
              <div className="results-wrapper">
                {imc.map((imc, key) => (
                  <ImcCard 
                   key={key} 
                   imc={imc.imc}
                   height={imc.height}
                   weight={imc.weight}
                   />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <img src={resultsImg} alt="" />
                <p>Nenhum IMC calculado até o momento.</p>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}