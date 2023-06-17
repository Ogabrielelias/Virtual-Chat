import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const ChatGroup = ({data, onClick}) => {
  return (
    <div onClick={()=>{onClick()}}>
    <Box
      sx={{
        borderBottom: "1px solid #000",
        p: "16px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box>
        <Avatar alt={`${data.nome}`} src="/" />
      </Box>
      <Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              whiteSpace: "nowrap",
              width: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.nome}
          </Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "flex-end"}}>
          <Typography
            variant="subtitle2"
            color={"grey"}
            sx={{
              textAlign: "right",
              whiteSpace: "nowrap",
              width: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.menssagens.length === 0?
            '':
              data.menssagens[data.menssagens.length-1].texto
          }
          </Typography>
        </Box>
      </Box>
    </Box>
    </div>
  );
};

export default ChatGroup;
