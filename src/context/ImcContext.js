import { createContext, useState } from "react";

export const ImcContext = createContext({})

export function ImcContextProvider(props) {
  const [user, setUser] = useState('')
  const [imc, setImc] = useState([])

  async function setUserName(name) {
    setUser(name)
  }

  return (
    <ImcContext.Provider value={{ imc, setImc, user, setUserName }} >
      {props.children}
    </ImcContext.Provider>
  )
}