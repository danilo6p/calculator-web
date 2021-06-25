import { useContext } from "react"
import { ImcContext } from "../context/ImcContext"
import { Toaster } from "react-hot-toast"

import { Navbar } from "../components/Navbar"
import { ImcCard } from "../components/ImcCard"

import resultsImg from '../assets/images/results.svg'

import '../styles/results.scss'

export function Results() {
  const { imc } = useContext(ImcContext)

  return(
    <>
      <div><Toaster/></div>
      <Navbar />
      <div id="results-page">
        <div className="results-container">
          <h1>Seus últimos resultados</h1>
          {
            imc.length > 0 ? (
              <div className="results-wrapper">
                {imc.map((imc, key) => (
                  <ImcCard imc={imc} index={imc.length - 1} key={key}/>
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