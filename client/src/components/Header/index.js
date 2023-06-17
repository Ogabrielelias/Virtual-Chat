import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Link, Paper, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { indigo } from "@mui/material/colors";
import { React, useContext, useState } from "react";
import { socket } from "../../socket.js";
import Context from "../../utils/context.js";
import AlertComponent from '../AlertComponent/index.js';
import ButtonRegistrarUsuario from "../ButtonRegistrarUsuario";
import EditarPerfil from "../EditarPerfil/index.js";
import MobileMenu from "../MobileMenu";
import SairButton from "../SairButton";



const Header = ({tknJwt}) => {
  const ind900 = indigo[900];
  // eslint-disable-next-line
  const {perfil, erro, alert, success} = useContext(Context)
  const [user, setUser] = perfil
  const [erros, setErros] = erro
  // eslint-disable-next-line
  const [sucesso,setSucesso] = success
  const [alerts, setAlerts] = alert
  const [mobileOpen, setMobileOpen] = useState(false);
  
 if(user.id === undefined){
    socket.emit("listar_perfil", tknJwt);
    socket.on("perfil", (user) => {
       setUser(user);
     })
    }
    
    socket.on("error", (erro) => {
      setErros(`${erro}`)
      setAlerts(true)
    });

    socket.on("success", (success)=>{
      setSucesso(success)
      setAlerts(true)
    });
    
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

  return (
    <nav style={{height:"60px"}}>
      <AlertComponent alert={alerts} setAlert={setAlerts} erro={erros} setErro={setErros}/>
      <Paper
        sx={{display: "flex", backgroundColor: ind900, padding: "8px",height:'60px',p:'0px'}}
        elevation={3}
        square
      >
        <Box
          sx={{
            margin:'8px',
            width: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{color: "white"}}>
            <Link href="/" color={"inherit"} underline="none">
              Virtual Chat
            </Link>
          </Typography>
          <MobileMenu tknJwt={tknJwt}/>
          <Box
            sx={{
              display: {xs: "none", sm: "flex"},
              flexDirection: "row",
              gap: "20px",
            }}
          >
            {tknJwt ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <EditarPerfil perfil={user} /> <SairButton />
              </Box>
            ) : (
              <Box sx={{display:'flex', gap:'20px'}}>
                <ButtonRegistrarUsuario />
                <Button href="/" variant="contained" color="primary">
                  Fazer Login
                </Button>
              </Box>
            )}
            

            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>


          </Box>
        </Box>
      </Paper>
    </nav>
  );
};

export default Header;
