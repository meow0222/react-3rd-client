import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Login } from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';
import { ScoreResult } from './ScoreResult';
import { ListItemButton } from '@mui/material';


export default function AccountMenu() {
  const password = 'admin';
  const [authed, setAuthed] = React.useState(false);
  function handleLogin() {
    if (document.getElementById('admPw').value === password) {
      setAuthed(true);
      alert("Welcome in, Mr. Admin!")
    } else if(document.getElementById('admPw').value === '01100100 01101111 01110101 01100111 01100001 01101100 00100000 01101001 01110011 00100000 01100001 01110111 01100101 01110011 01101111 01101101 01100101'){
      alert("++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>++++++++++++++.>++++.-------.+++++++++++++.---.++++++++.<<++.>>-------------.+++++++++.+++.<<.>>-------------.+++++++++++++++++.<+++++++++++++++++.>----.+++++++.-----.<+++.+.+++++.-------.<.>-----------------------------------.>-----.++++++.--------------.------.+++++++++++.<<+....-.>++++.>-------.+++++++++++++.-------------.<<+++++++.>>++++++++++++++.<<-------.>>.----.--.--------.+++++++++++++++.------------.+.+++++.-------.<<.>>-.+++++++++.+++.<<.>>+++++++.----------.++++++.<<+...");
      setTimeout(() => {
        alert('https://www.youtube.com/watch?v=xvFZjo5PgG0');
        //not sus
      }, 3000);
    }
    else {
      alert("Wrong Password!");
    }
  }
  function handleLogout() {
    setAuthed(false);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (authed === false) {
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 0 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>X</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <input id='admPw' className='p-1' type='password' placeholder='admin password' />
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogin}>
            Login <Login />
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 0 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>X</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleLogout}>
            Logout <Logout />
          </MenuItem>
          <MenuItem>
            <ListItemButton to={'fdbjlndhngbhsodbgjas'}>Chart</ListItemButton>
          </MenuItem>
        </Menu>
      </React.Fragment>

    );
  }
}
