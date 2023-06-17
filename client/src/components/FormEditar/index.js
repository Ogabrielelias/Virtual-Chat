import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Drawer, IconButton, TextField } from "@mui/material";
import { React, useContext, useEffect, useState } from "react";
import editarUsuario from "../../functions/editarUsuario.js";
import Context from "../../utils/context";

const FormEditar = ({toggleDrawer, state}) => {
  const [isMobile, setIsMobile] = useState(false);

  // eslint-disable-next-line
  const {perfil} = useContext(Context);
  // eslint-disable-next-line
  const [user, setUser] = perfil
  const [dadosEditar, setDadosEditar] = useState({
  });
  
  useEffect(()=>{setDadosEditar({
    id: user.id,
    nome: user.nome,
    telefone: user.telefone,
  })},[user])

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 600px)").matches);
  }, []);

  const handleLogin = (editado) => (e) => {
    e.preventDefault();

    const dados = {
      nome: editado.nome.trim(),
      telefone: editado.telefone.trim(),
    };
    editarUsuario({id: editado.id, dados: dados});
  };

  return (
    <>
      <Drawer
        id={`menu-appbar-${user.id}`}
        anchor={isMobile ? "bottom" : "left"}
        open={state}
        onClose={toggleDrawer(false)}
        sx={{
          display: "flex",
        }}
      >
        <IconButton
          size="large"
          sx={{borderRadius: "0px"}}
          onClick={toggleDrawer(false)}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            p: "16px",
          }}
        >
          <form
            onSubmit={handleLogin(dadosEditar)}
            style={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              gap: "30px",
              minWidth: "300px",
              maxWidth: "500px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Nome"
              name="nome"
              variant="outlined"
              onChange={(e) =>
                setDadosEditar({...dadosEditar, nome: e.target.value})
              }
              value={dadosEditar.nome}
            />
            <TextField
              id="outlined-basic"
              label="Telefone"
              name="telefone"
              variant="outlined"
              onChange={(e) =>
                setDadosEditar({...dadosEditar, telefone: e.target.value})
              }
              value={dadosEditar.telefone}
            />
            <Button type="submit" variant="contained" color="success">
              Editar
            </Button>
          </form>
        </Box>
      </Drawer>
    </>
  );
};

export default FormEditar;
