import { Alert, Box, Slide } from "@mui/material";
import React, { useContext } from "react";
import Context from "../../utils/context";

const AlertComponent = ({alert, setAlert}) => {
  // eslint-disable-next-line
  const {perfil, erro, success} = useContext(Context);
  // eslint-disable-next-line
  const [erros, setErros] = erro;
  // eslint-disable-next-line
  const [sucesso, setSucesso] = success;

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          zIndex: "2000",
          width: "100vw",
        }}
      >

          {erros.length === 0 ? null : (
            <Slide direction="down" in={alert}>
            <Alert
              sx={{position: "fixed", marginTop: "20px"}}
              onClose={() => {
                setAlert(false);
                setErros("");
              }}
              variant="filled"
              severity="error"
            >
              {erros}
            </Alert>
            </Slide>
          )}
          {sucesso.length === 0  ? null : (
            <Slide direction="down" in={alert}>
            <Alert
              sx={{position: "fixed", marginTop: "20px"}}
              onClose={() => {
                setAlert(false);
                setSucesso("");
              }}
              variant="filled"
              severity="success"
            >
              {sucesso}
            </Alert>
            </Slide>
          )}

      </Box>
    </>
  );
};

export default AlertComponent;
