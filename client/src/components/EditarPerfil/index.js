import { Button } from "@mui/material";
import React, { useState } from "react";
import { socket } from "../../socket.js";
import FormEditar from "../FormEditar";

const EditarPerfil = () => {
    const [state, setState] = useState(false);

     const toggleDrawer = (isOpen) => (event) => {
        if (
          event &&
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
        setState(isOpen);
      };

  return (
    <>
      <Button onClick={()=>{socket.emit('editar_perfil'); setState(true) }} variant="contained" color="primary">
        Editar Perfil
      </Button>
      <FormEditar toggleDrawer={toggleDrawer} state={state}/>
    </>
  );
};

export default EditarPerfil;
