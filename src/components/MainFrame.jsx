//REACT
import * as React from 'react';
import { duration, styled, useTheme } from '@mui/material/styles';
import { Routes, Route, Link } from 'react-router-dom';

//MUI
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {InputScore} from './InputScore';

//Import from components
import AccountMenu from './AccountMenu';

import Dashboard from './DashBoard';
import Home from './Home';
// import { ScoreResult } from './ScoreResult';
// This is MUI. Please go to <component="main"> on the bottom.
// Please execute the Http request(GET) in this component.
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


import carBlack from '/cars/car-black.png';
import carRed from '/cars/car-red.png';
import policeCar from '/cars/police.png';
import tank from '/cars/tank.png';
import truck1 from '/cars/truck-1.png';
import truck from '/cars/truck.png';
import ambulance from '/cars/ambulance.png'
import axios from 'axios';


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const localImageUrls = [carBlack, carRed, policeCar, tank, truck1, truck, ambulance];
  function loadCars() {
    axios.get("http://localhost:3000/racedata", {
        headers: {'task' : 'getStuff'},
        responseType: "json"
    })
    .then((response) => {
      const track = document.getElementById('track');
      const riders = response.data;
      track.innerHTML = '';
      var maxpoint = -Infinity;
      for(let i = 0; i < riders.length; i++){
        if(riders[i].points > maxpoint && riders[i].points > 10){
          maxpoint = riders[i].points;
        }
      }
      const constant = 100 / maxpoint;
      console.log('constant: ' + constant);
      for(let i = 0; i < riders.length; i++){
        let img = document.createElement('img');
        let tooltip = document.createElement('div');
        let txt = document.createElement('p');

        img.setAttribute('src', `${localImageUrls[riders[i].car]}`);
        img.setAttribute('alt', `${riders[i].car}`);

        tooltip.setAttribute('style', `margin-left: calc(${riders[i].points * constant}% - 70px);`)
        //txt.setAttribute('style', `left: calc(${riders[i].points * 2.8}%);`)
        //img.animate([{ marginLeft: "auto" }, { marginLeft: `calc(${riders[i].points * constant}% - 70px)` }], {duration: 500, iterations: 1});
        txt.innerHTML = `Name: ${riders[i].name};\nCar: ${riders[i].carname};\nScore: ${riders[i].points}`

        img.setAttribute('class', 'car');
        tooltip.setAttribute('class', 'tooltip');
        txt.setAttribute('class', 'ttText');

        tooltip.appendChild(img);
        tooltip.appendChild(txt);
        track.appendChild(tooltip);
        console.log(`appending ${riders[i].name}'s ${riders[i].carname} with ${riders[i].points * constant}% margin`)
      }
    })
  }

  return (
    <Box sx={{ display: 'flex', bgcolor: 'transparent' }}>
      <AppBar position="fixed" open={open} sx={{ bgcolor: 'transparent',  boxShadow: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              bgcolor: 'black',
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
          <MenuIcon />
          </IconButton>
          <Typography className='text-black' variant="h6" noWrap component="div">
          </Typography>

        {/* ---------------------------------- Account Menu component ---------------------------------- */}

          <AccountMenu/>

        {/* -------------------------------------------------------------------------------------------- */}



        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{bgcolor: 'transparent'}}>
        <DrawerHeader sx={{bgcolor: 'transparent'}}>
          <IconButton className='bg-black' onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List  >
          {[
            { text: 'Home', path: '/'},
            { text: 'Dashboard', path: './DashBoard'},
            { text: 'Chart', path: './Chart'}
          ].map((link, index) => (
            <ListItem key={link.text} disablePadding sx={{ display: 'block'}}>
              <ListItemButton
                component={Link}
                to={link.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={loadCars}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={link.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ------------------------ Here is our main section, you can put & render components. ------------------------ */}

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* <Dashboard onClick={loadCars}/> */}
        {/* <Button onClick={loadCars} variant="contained">Load Cars</Button> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="dashboard" element={<Dashboard/>} />   
          <Route path='inputscore' element={<InputScore/>} />
          {/* <Route path='scoreresult' element={<ScoreResult/>} /> */}
        </Routes>
        {/* <ScoreResult/> */}
      </Box>
      {/* ------------------------------------------------------------------------------------------------------------ */}

    </Box>
  );
}