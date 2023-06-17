import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import { React, useContext, useState } from "react";
import Context from "../../utils/context";
import ButtonRegistrarUsuario from "../ButtonRegistrarUsuario";
import EditarPerfil from "../EditarPerfil/index.js";
import SairButton from "../SairButton";


const MobileMenu = ({tknJwt}) => {
  const [state, setState] = useState(false);
  // eslint-disable-next-line
  const {perfil, erro} = useContext(Context)
  // eslint-disable-next-line
  const [user, setUser] = perfil
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <Box
      sx={{
        display: {xs: "flex", sm: "none"},
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <IconButton
        size="large"
        onClick={toggleDrawer(true)}
        sx={{color: "white"}}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        id="menu-appbar"
        anchor={"top"}
        open={state}
        onClose={toggleDrawer(false)}
        sx={{
          display: {xs: "flex", sm: "none"},
        }}
      >
        {tknJwt ? (
          <Box
            sx={{
              display: "grid",
              p: "16px",
              gap: "20px",
            }}
          >
            <EditarPerfil perfil={user} /> <SairButton />
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              p: "16px",
              gap: "20px",
            }}
          >
            <ButtonRegistrarUsuario />
            <Button href="/" variant="contained" color="primary">
              Fazer Login
            </Button>
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
