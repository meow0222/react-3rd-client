//REACT
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
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


//Import from components
import AccountMenu from './AccountMenu';
import helloContext from './admin';
import Dashboard from './DashBoard';
import Home from './Home';
import { ScoreResult } from './ScoreResult';





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



//import images
import carBlack from '/cars/car-black.png';
import carRed from '/cars/car-red.png';
import policeCar from '/cars/police.png';
import tank from '/cars/tank.png';
import truck1 from '/cars/truck-1.png';
import truck from '/cars/truck.png';
import ambulance from '/cars/ambulance.png';
import flag from '/checkerflag.png';
import home from '/home.png';
import chart from '/chart.png';



import axios from 'axios';



export default function MiniDrawer() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  
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

          <AccountMenu setLogin={setLogin}/>

        {/* -------------------------------------------------------------------------------------------- */}



        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{bgcolor: 'transparent'}}>
        <DrawerHeader sx={{bgcolor: 'transparent'}}>
          <IconButton className='bg-black' onClick={handleDrawerClose}>
          <helloContext.Consumer >
            {value => <h1 className='greetingText text-sm pr-8'>{value}</h1>} 
            {/* prints: Reed */}
          </helloContext.Consumer>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {[
            { text: 'Home', path: '/', load: loadCars, icon: home },
            { text: 'Dashboard', path: '/dashboard', load: loadCars, icon: flag },
            { text: 'Chart', path: '/chart', load: loadCars, icon: chart }
          ].map((link) => (
            <ListItem key={link.text} disablePadding sx={{ display: 'block'}}>
              <ListItemButton
                component={Link}
                to={link.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => link.load()}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <img className='drawer-icon' src={link.icon} alt={`${link.text} Icon`} />
                </ListItemIcon>
                <ListItemText primary={link.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ------------------------ Here is our main section, you can put & render components. ------------------------ */}

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard/>} />   
          <Route path="chart" element={<ScoreResult login={login}/>} login />
        </Routes>
      </Box>
      {/* ------------------------------------------------------------------------------------------------------------ */}

    </Box>
  );
}