import { Container } from "@mui/material"
import React from 'react'
import FormLogin from "../../components/FormLogin"
import { obterCookie } from "../../utils/cookies"

const Home = () => {
  return (
    <Container sx={{display:"flex", alignItems:"center", justifyContent:"center", height:"80vh"}}>
      {obterCookie('tokenJwt')?null:<FormLogin/>}
    </Container>
  )
}

export default Home