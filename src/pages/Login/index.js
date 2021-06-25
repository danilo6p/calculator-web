import { useHistory } from 'react-router-dom'
import { useState, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import loginImg from '../../assets/images/login.svg'
import logo from '../../assets/images/logo-v.svg'
import googleIcon from '../../assets/images/google-icon.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { ImcContext } from '../../context/ImcContext'

import './styles.scss'

export function Login() {
  const [name, setName] = useState('')
  const history = useHistory()
  const { setUserName } = useContext(ImcContext)

  function handleSetUserName(event) {
    event.preventDefault()

    if(name.trim() === ''){
      toast.error('Insira um nome válido')
      return;
    }
    else {
      setUserName(name)
      history.push('/calculate')
    }
  }

  return (
    <>
    <div><Toaster/></div>
    <div id="login-page">
      <aside>
        <img src={loginImg} alt="" />
        <strong>Sua saúde não pode esperar!</strong>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="IMC" />
          <button className="google-button" disabled>
            <img src={googleIcon} alt="Logo Google" />
            Faça login com Google
          </button>
          <div className="separator">ou apenas</div>
          <form onSubmit={handleSetUserName}>
            <Input 
              type="text"
              placeholder="Insira seu nome"
              onChange={ev => setName(ev.target.value)}
            />
            <Button type="submit">
              Vamos lá
            </Button>
          </form>
        </div>
      </main>
    </div>
    </>
  )
}