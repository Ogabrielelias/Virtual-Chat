import { Box, Paper, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";

function MyBalloon({texto, data}) {
    return <Paper elevation={2}
      sx={{
        float: "right",
        m: "20px",
        backgroundColor: indigo[700],
        display: "flex",
        flexDirection: "column",
        maxWidth: "35%",
        minWidth: "100px",
        borderRadius: "10px 10px 00px 10px",
        minHeight: "50px",
        width: "fit-content",
        p: "8px",
        color: "white",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          whiteSpace: "nowrap",
          maxWidth: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: "start",
          width: "100%",
          fontWeight: "600",
        }}
      >
        Eu
      </Typography>
      <Box>
        <Typography sx={{ wordBreak: "break-all" }}>
          {texto}
        </Typography>
      </Box>
      <Box sx={{  width: "100%", display:'flex', justifyContent:'flex-end' }}>
        <Typography
            variant="subtitle2"
            sx={{ textAlign: "end", width: "100px", overflow:'hidden' }}
        >
            {data}
        </Typography>
      </Box>
    </Paper>;
  };

export default MyBalloon