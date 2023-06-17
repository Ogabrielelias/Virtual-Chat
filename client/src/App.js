import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/index.js";
import { socket } from "./socket.js";
import Context from "./utils/context.js";
import { obterCookie } from "./utils/cookies";

function App() {

  const tknJwt = obterCookie("tokenJwt");
  const [perfil, setPerfil] = useState({});
  const [erro,setErro] = useState('')
  const [sucesso,setSucesso] = useState('')
  const [alert,setAlert] = useState(false)
  const [chats,setChats] = useState([])
  const [currChat,setCurrChat] = useState([])

  socket.on('inaccessible_url',()=>{
    window.location.href = "/conversas";
  })

  socket.on("connect_error", (erro) => {
    window.location.href='/'
  });

  return (
    <Context.Provider value={{perfil:[perfil, setPerfil],erro:[erro,setErro], alert:[alert,setAlert], success:[sucesso,setSucesso], chats:[chats,setChats],currChat:[currChat,setCurrChat]}}> 
      <Header tknJwt={tknJwt}/>
        <Box sx={{height:'calc(100vh - 60px)'}}>
          <Outlet />
        </Box>
    </Context.Provider>
  );
}

export default App;
