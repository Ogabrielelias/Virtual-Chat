import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import cadastrarChat from "../../functions/cadastrarChat.js";
import Context from '../../utils/context.js';


function CriarChat() {

    const {perfil} = useContext(Context)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const criarChat = (e) => {
    e.preventDefault()
    
    const dados ={id:e.target.id.value,nome:e.target.nome.value,email: perfil[0].email}

    cadastrarChat(dados)
    handleClose();
  };
  

  return (
    <>
      <Button
        onClick={() => {
          handleOpen();
        }}
        sx={{width: "100%"}}
        variant="contained"
        color="success"
      >
        Criar
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-criarChat"
        aria-describedby="modal-criarChat"
      >
        <form onSubmit={(e)=>criarChat(e)}>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              borderRadius: "20px",
              border: "2px solid #000",
              boxShadow: 24,
              minWidth: "300px",
              p: 4,
            }}
          >
            <Typography variant="h5" textAlign={"center"}>
              Crie seu Chat:
            </Typography>
            <TextField
              sx={{width: "100%"}}
              id="outlined-basic"
              label="Chave da sala"
              variant="outlined"
              name="id"
            />
            <TextField
              sx={{width: "100%"}}
              id="outlined-basic"
              label="Nome da Sala"
              variant="outlined"
              name="nome"
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <Button
                fullWidth
                onClick={() => {
                  handleClose();
                }}
                type="button"
                variant="contained"
                color="primary"
              >
                Cancelar
              </Button>
              <Button
                fullWidth
                onClick={() => {}}
                type="submit"
                variant="contained"
                color="success"
              >
                Criar
              </Button>
            </Box>
          </Box>
        </form>
      </Modal>
    </>
  );
}

export default CriarChat;
