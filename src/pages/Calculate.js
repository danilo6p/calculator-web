import { useContext } from "react"
import { Navbar } from "../components/Navbar"

import { ImcContext } from '../context/ImcContext'

export function Calculate() {
  const { user } = useContext(ImcContext)

  return(
    <>
      <Navbar />
    </>
  )
}