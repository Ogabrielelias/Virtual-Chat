import { Container } from "@mui/material"
import React from 'react'
import RegisterForm from "../../components/RegisterForm"

const RegistrarUsuario = () => {
  return (
    <Container sx={{display:"flex", alignItems:"center", justifyContent:"center", height:"80vh"}}>
       <RegisterForm/>
    </Container>
  )
}

export default RegistrarUsuario