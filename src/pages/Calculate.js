import { useContext, useState } from "react"
import { Navbar } from "../components/Navbar"
import toast, { Toaster } from 'react-hot-toast'

import { ImcContext } from '../context/ImcContext'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ImcCard } from "../components/ImcCard"

import calculateImg from '../assets/images/calculate.svg'

import '../styles/calculate.scss'

export function Calculate() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const { user, imc, setImc } = useContext(ImcContext)

  function calculateImc(event) {
    event.preventDefault()

    if(height.trim() === '' || weight.trim() === '') {
      toast.error('Por favor, preencha os campos corretamente.')
      return;
    }
    else {
      let tempHeight = (parseFloat(height)).toFixed(2)
      let tempWeight = (parseFloat(weight)).toFixed(2)
      let calculatedImc = ((tempWeight / (tempHeight * tempHeight)).toFixed(2)).toString()

      toast.success('IMC Calculado')
      let newImc = { height: height, weight: weight, imc: calculatedImc }
      setImc([ ...imc, newImc ])
      console.log(imc)
      setHeight('')
      setWeight('')
    }
  }

  return(
    <>
      <div><Toaster/></div>
      <Navbar />
      <div id="calculate-page">
        <aside>
          <strong>Olá, {user}</strong>
          <img src={calculateImg} alt="" />
        </aside>
        <main>
          <div className="main-content">
            <form onSubmit={calculateImc}>
              <h1>Calcule seu IMC</h1>
              <Input
                type="text"
                placeholder='Informe sua altura (m)'
                value={height}
                onChange={ev => setHeight(ev.target.value)}
              />
              <Input 
                type="text"
                placeholder='Informe seu peso (kg)'
                value={weight}
                onChange={ev => setWeight(ev.target.value)}
              />
              <Button type="submit">Calcular</Button>
            </form>
            <p className="card-text">Ultimo resultado</p>
            <ImcCard imc={imc} index={imc.length - 1} />
          </div>
        </main>
      </div>
    </>
  )
}