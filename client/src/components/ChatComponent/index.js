import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import { Avatar, Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import enviarMsg from "../../functions/enviarMsg";
import listarChat from "../../functions/listarChat";
import { socket } from "../../socket.js";
import Context from "../../utils/context";
import MyBalloon from "../MyBalloon";
import OthersBalloon from "../OthersBalloon";

const ChatComponent = ({currentChat}) => {
  const {perfil} = useContext(Context);

  const [texto, setTexto] = useState("");
  const [msg, setMsg] = useState([])

  socket.on('menssagens_chat',(menssagens)=>{
     const newMsg = [...menssagens].reverse()
    setMsg(newMsg)
  })

  socket.on('novas_menssagens',()=>{
    listarChat(currentChat)
    socket.emit('listar_chats', perfil[0].email)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    enviarMsg({texto: texto, chat: currentChat, data: date, user: perfil[0]});
    setTexto('')
    listarChat(currentChat)
  };

  return (
    <Paper elevation={2}>
      <Box
        sx={{height: "72px", width: {xs: "100vw", sm: "calc(100vw - 300px)"}}}
      >
        <Paper elevation={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              p: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Avatar alt={`${currentChat.nome}`} src="/" />
              <Typography
                variant="h6"
                sx={{
                  whiteSpace: "nowrap",
                  width: {xs: "150px", sm: "200px", md: "350px", lg: "500px"},
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {currentChat.nome}
              </Typography>
            </Box>
            <Button sx={{borderRadius: "50%", p: "8px", minWidth: "auto"}}>
              <MoreVertIcon />
            </Button>
          </Box>
        </Paper>
      </Box>
      <Box sx={{height:'calc(100% - 72px)'}}>
        <Box
          sx={{
            display:'flex',
            flexDirection:'column-reverse',
            height:'inherit',
            backgroundColor: "lightblue",
            width: {xs: "100vw", sm: "calc(100vw - 300px)"},
            overflowX: "hidden",
            overflowY:'scroll',
          }}
        >
          {msg.map((ms)=>(
            ms.usuario.id === perfil[0].id? 
            <Box key={ms.id}>
              <MyBalloon texto={ms.texto} data={ms.data.slice(11,16)} />
            </Box>
            :
            <Box key={ms.id}>
              <OthersBalloon user={ms.usuario.nome} texto={ms.texto} data={ms.data.slice(11,16)} />
            </Box>
          ))}
        </Box>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              position:'absolute',
              bottom:0,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              width: {xs: "100vw", sm: "calc(100vw - 300px)"},
            }}
          >
            <TextField
              sx={{width: "calc(100% - 80px)", p: "8px"}}
              multiline
              maxRows={3}
              id="standard-multiline-static"
              variant="outlined"
              onChange={(e) => setTexto(e.target.value)}
              value={texto}
              name="texto"
            />
            <Button
              type="submit"
              sx={{p: "16px", borderRadius: "50%", mr: "8px"}}
              variant="contained"
            >
              <SendIcon />
            </Button>
          </Box>
        </form>
        </Box>
    </Paper>
  );
};

export default ChatComponent;
