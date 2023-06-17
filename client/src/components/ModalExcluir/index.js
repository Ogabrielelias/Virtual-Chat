import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import deletaUsuario from "../../functions/deletaUsuario.js";

const ModalExcluir = ({toggleModal, open, deleta}) => {
  const checkState = (nome) => (item) => {
    return item.nome === nome;
  };

  return (
    <>
      <Modal
        open={open.find(checkState(deleta.nome)).open}
        aria-labelledby="modal-excluir"
        aria-describedby="modal-excluir"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            borderRadius: "20px",
            border: "2px solid #000",
            boxShadow: 24,
            minWidth:'220px',
            p: 4,
          }}
        >
          <Typography textAlign={'center'}>Você deseja excluir "{deleta.nome}"</Typography>
          <Box sx={{display:'flex' , gap:'20px', marginTop:'20px'}}>
          <Button
          fullWidth
            onClick={() => {
              toggleModal(deleta.nome, false);
            }}
            type="button"
            variant="contained"
            color="primary"
          >
            Cancelar
          </Button>
          <Button
            fullWidth
            onClick={() => {
              deletaUsuario(deleta._id);
              window.location.reload();
            }}
            type="button"
            variant="contained"
            color="error"
          >
            Excluir
          </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalExcluir;
