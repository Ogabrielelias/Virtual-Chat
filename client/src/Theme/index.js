import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

const theme = createTheme({
    components: {
        MuiTableHead:{
            styleOverrides:{
                root:{
                    backgroundColor: indigo[900],
                    "& .MuiTableCell-root":{
                        color:'white'
                    }
                },
            }
        },
        MuiTableBody:{
            styleOverrides:{
                root:{
                    backgroundColor: indigo[100]
                }
            }
        },
        MuiTableCell:{
            styleOverrides:{
                root:{
                    fontSize:18
                }
            }
        },
       
    }});

export default theme;