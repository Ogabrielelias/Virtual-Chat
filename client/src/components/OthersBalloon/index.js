import { Box, Paper, Typography } from "@mui/material";
import React from "react";

function OthersBalloon({texto, data, user}) {
    return <Paper elevation={2}
      sx={{
        float: "left",
        m: "20px",
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
        maxWidth: "35%",
        minWidth: "100px",
        borderRadius: "10px 10px 10px 0px",
        minHeight: "50px",
        width: "fit-content",
        p: "8px",
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
        {user}
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

export default OthersBalloon