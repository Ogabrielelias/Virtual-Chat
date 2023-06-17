import { Button } from '@mui/material'
import React from 'react'
import { removeCookie } from '../../utils/cookies'

const SairButton = () => {
    const sair = () =>{
        removeCookie('tokenJwt')
        removeCookie('lvl')
        window.alert("Usuário deslogado com sucesso!")
        window.location.href='/'
      }
  return (
    <>
        <Button 
          onClick={()=>{sair()}} 
          variant="contained"
          color="error"
          >
            Sair
          </Button>
    </>
  )
}

export default SairButton