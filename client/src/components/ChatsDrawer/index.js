import { Box, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import listarChat from '../../functions/listarChat.js'
import Context from '../../utils/context.js'
import ChatGroup from '../ChatGroup'
import CriarChat from '../CriarChat/index.js'
import EntrarChat from '../EntrarChat/index.js'

const ChatsDrawer = ({onClick}) => {
  // eslint-disable-next-line 
  const {perfil,chats,currChat} = useContext(Context)
  // eslint-disable-next-line 
  const [chat,setChat] = chats
  // eslint-disable-next-line 
  const [currentChat, setCurrentChat] = currChat

  const connectToChat = (chat) =>{
    setCurrentChat(chat); 
    onClick()
    listarChat(chat)
    
  }

  return (
    <Box sx={{height:'100%'}}>
      <Paper elevation={2}>
        <Box sx={{p:'8px', display:'flex', justifyContent:'center'}}>
          <Typography variant='h6'>
            Chats
          </Typography>
        </Box>
        <Box sx={{p:'8px', display:'flex', alignItems:'center', gap:'20px'}} >
          <EntrarChat/>
          <CriarChat/>
        </Box>
      </Paper>
      
    {chat.map((conv)=>(<Box key={conv.id}><ChatGroup onClick={()=>{connectToChat(conv)}} data={conv}/></Box>))}
    </Box>
  )
}

export default ChatsDrawer

