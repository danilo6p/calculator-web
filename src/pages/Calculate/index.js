import { useContext, useState } from "react"
import toast, { Toaster } from 'react-hot-toast'

import { ImcContext } from '../../context/ImcContext'
import { Navbar } from "../../components/Navbar"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ImcCard } from "../../components/ImcCard"

import calculateImg from '../../assets/images/calculate.svg'

import './styles.scss'

export function Calculate() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  // const [rating, setRating] = useState('')
  const { user, imc, setImc } = useContext(ImcContext)

  function calculateImc(event) {
    event.preventDefault()

    if(height.trim() === '' || weight.trim() === '') {
      toast.error('Por favor, preencha os campos corretamente.')
      return;
    }
    else {
      let tempHeight = (parseFloat(height.replace(",", "."))).toFixed(2)
      let tempWeight = (parseFloat(weight.replace(",", "."))).toFixed(2)
      let calculatedImc = ((tempWeight / (tempHeight * tempHeight)).toFixed(2)).toString()
      let rating = ''

      if(calculatedImc < 18.5) {
        rating = 'Magreza'
      } else if(calculatedImc >= 18.5 || calculatedImc <= 24.9) {
        rating = 'Normal'
      } else if(calculatedImc >= 25 || calculatedImc <= 29.9) {
        rating = 'Sobrepeso'
      } else if(calculatedImc >= 30 || calculatedImc <= 39.9) {
        rating = 'Obesidade'
      } else if(calculatedImc >= 40) {
        rating = 'Obesidade Grave'
      }

      toast.success('IMC Calculado')
      let newImc = { height: tempHeight, weight: tempWeight, imc: calculatedImc, rating: rating }
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
        <p>{imc.rating}</p>
        <aside>
          {
            user.trim() !== '' ? (
              <strong>Olá, {user}</strong>
            ) : (
              <strong>Olá, usuário</strong>
            )
          }
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