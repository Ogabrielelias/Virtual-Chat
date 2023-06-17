import { Button, Link, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const RegistrarButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <>
        <Button
            id="registrar-button"
            aria-controls={open ? 'registrar-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant='contained'
          >
            Registrar
          </Button>
          <Menu
          id="registrar-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          MenuListProps={{
            'aria-labelledby': 'registrar-button',
          }}
          >
              <Link href="/registrarLoja" underline='none' sx={{color:'black'}}>
                <MenuItem onClick={handleClose}>
                  Loja
                </MenuItem>
              </Link>
              <Link href="/registrarFuncionario" underline='none' sx={{color:'black'}}>
                <MenuItem onClick={handleClose}>
                  Funcionario
                </MenuItem>
              </Link>
            </Menu>
    </>
  )
}

export default RegistrarButton