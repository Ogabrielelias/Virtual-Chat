import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, FormControl, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import cadastroUsuario from '../../functions/cadastroUsuario';

const RegisterForm = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const dados = {
        nome: e.target.nome.value.trim(),
        telefone: e.target.telefone.value.trim(),
        email: e.target.email.value.toLowerCase().replace(/ /g, ""),
        senha: e.target.senha.value.replace(/ /g, ""),
        }
      cadastroUsuario(dados)
    }

  return (
    <form onSubmit={(e)=>handleSubmit(e)} style={{display:"flex",textAlign:"center", flexDirection:"column", gap:"30px", minWidth:"300px", maxWidth:"500px"}}>
        <Typography sx={{marginTop:"40px"}}  variant="h4">Registrar Usuario</Typography>
        <TextField 
        id="outlined-basic-nome" 
        label="Nome" 
        name='nome'
        variant="outlined" 
        />
        <TextField 
        id="outlined-basic-telefone" 
        label="Telefone" 
        name='telefone'
        variant="outlined" 
        />
        <TextField 
        id="outlined-basic-email" 
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
        type='submit'>Registrar</Button>
    </form>
  )
}

export default RegisterForm