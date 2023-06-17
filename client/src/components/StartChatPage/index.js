import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Context from '../../utils/context'

const StartChatPage = () => {

    const {perfil} = useContext(Context)
    // eslint-disable-next-line
    const [user, setUser] = perfil
    
    return (
  
        <Box>
            <Box sx={{width:{xs:'100vw',sm:'calc(100vw - 300px)'}, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column',gap:'40px',backgroundColor:'lightblue', height:'calc(100vh - 60px)'}}>
             <Typography variant='h3' sx={{textAlign:'center'}}>Olá {user.nome}! 👋</Typography>
             <Typography variant='h4'  sx={{textAlign:'center'}}>É bom te ver por aqui!</Typography>
             <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',textAlign:'center'}}>
                <Typography variant='h5'  sx={{textAlign:'center'}}>Veja se há novas menssagens</Typography>
                <Typography variant='h5'  sx={{textAlign:'center'}}>ou crie um novo grupo para você e seus amigos!</Typography>
             </Box>
            </Box>
        </Box>
  )
}

export default StartChatPage