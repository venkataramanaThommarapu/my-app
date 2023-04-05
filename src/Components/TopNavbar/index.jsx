import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '../../Pages/Home';
import Sass from '../../Pages/Sass';
import { NavLink } from 'react-router-dom';
import Sass2 from '../../Pages/Sass2';
import Form from '../../Pages/Form';
import './index.css';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className='d-flex'>
            <h3>Default Workflow</h3> 
            <span className='text-black ms-2 pt-1'>This is a Default Workflow</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <NavLink to="/" className="text-decoration-none">
        <ListItem >
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink to="/sass" className="text-decoration-none">
            <ListItem  >
              <ListItemButton>
                <ListItemIcon>   
                </ListItemIcon>
                <ListItemText primary={"Sass"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink to="/sass2" className="text-decoration-none">
            <ListItem  >
              <ListItemButton>
                <ListItemIcon>   
                </ListItemIcon>
                <ListItemText primary={"Sass2"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink to="/Form" className="text-decoration-none">
            <ListItem  >
              <ListItemButton>
                <ListItemIcon>   
                </ListItemIcon>
                <ListItemText primary={"Form"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink to="/Temparature" className="text-decoration-none">
            <ListItem  >
              <ListItemButton>
                <ListItemIcon>   
                </ListItemIcon>
                <ListItemText primary={"Temparature"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
    </Box>
  );
}