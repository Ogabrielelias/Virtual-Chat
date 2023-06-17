import ChatIcon from '@mui/icons-material/Chat';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { indigo } from '@mui/material/colors';
import React, { useContext, useEffect, useState } from 'react';
import ChatComponent from '../../components/ChatComponent';
import ChatsDrawer from '../../components/ChatsDrawer';
import StartChatPage from '../../components/StartChatPage';
import { socket } from '../../socket.js';
import Context from '../../utils/context';
import { obterCookie } from '../../utils/cookies';


const Conversas = () => {
  
  const {chats,currChat, perfil} = useContext(Context)
  // eslint-disable-next-line 
  const [chat,setChat] = chats
  // eslint-disable-next-line
  const [currentChat, setCurrentChat] = currChat;
  
  const tknJwt = obterCookie("tokenJwt");
  const [contatosOpen, setContatosOpen] = useState(false);

  const container = window !== undefined ? () => window.document.body : undefined;

  const handleDrawerContatos = () => {
    setContatosOpen(!contatosOpen);
  };

  useEffect(()=>{
    socket.emit('listar_chats', perfil[0].email)
    socket.on('chats',(chats)=>{
      setChat(chats)
    })
  },[perfil, setChat])

  return (
    <>
      { tknJwt?<>
       <Toolbar sx={{display: { sm: 'none' }, position:'fixed', zIndex:'1201',right:8,bottom:80, backgroundColor:indigo[900],pr:'8px',pl:'8px',borderRadius:'50%', '& .MuiButtonBase-root':{ marginLeft: 0, marginRight: 0 }}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerContatos}
            sx={{ mr: 2, display: { sm: 'none' }, color:'white'}}
          >
            <ChatIcon />
          </IconButton>
        </Toolbar>
     
      <Box
        component="nav"
        sx={{display:'flex',flexDirection:'row', width: { sm: '300px' },height:'100%', flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={contatosOpen}
          onClose={handleDrawerContatos}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '300px',},
          }}
        >
          <ChatsDrawer onClick={handleDrawerContatos}/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },height:'100%',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '300px' ,position:'relative'},
          }}
          open
        >
          <ChatsDrawer onClick={handleDrawerContatos}/>
        </Drawer>
        {currentChat.id?
        <ChatComponent currentChat={currentChat}/>
        :
          <StartChatPage/>
        }
      </Box></>:null}
    </>
  )
}

export default Conversas