import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, FormControl, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { React, useContext, useState } from 'react';
import loginUsuario from '../../functions/loginUsuario.js';
import Context from "../../utils/context.js";

const FormLogin = () => {
  // eslint-disable-next-line
  const {perfil, erro} = useContext(Context)
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleLogin = (e)=>{
      e.preventDefault()
      const dados = {
        email: e.target.email.value.toLowerCase().replace(/ /g, ""),
        senha: e.target.senha.value.toLowerCase().replace(/ /g, "")
      }
    loginUsuario(dados)
      
    }

  return (
    <form onSubmit={(e)=>handleLogin(e)} style={{display:"flex",textAlign:"center", flexDirection:"column", gap:"30px", minWidth:"300px", maxWidth:"500px"}}>
        <Typography sx={{marginTop:"40px"}} variant="h4">Faça seu Login</Typography>
        <TextField 
        id="outlined-basic" 
        label="E-mail" 
        name='email'
        variant="outlined" 
        />
        <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          label="Senha"
          name='senha'
          autoComplete="current-password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        </FormControl>
        <Button 
        variant="contained"
        type='submit'>Entrar</Button>
    </form>
  )
}

export default FormLogin