// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import MuiDrawer from '@mui/material/Drawer';
// import { styled, useTheme } from '@mui/material/styles';
// import GroupIcon from '@mui/icons-material/Group';
// import { Box, Menu, MenuItem } from '@mui/material';



// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));



// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );




// export default function Sidenav({ open, setOpen }) {


//     const theme = useTheme();
//     const navigate = useNavigate();



//     const handleDrawerClose = () => {
//         setOpen(false);
//     };




//     return (
//         <Box>
//             <Drawer variant="permanent" open={open}>
//                 <DrawerHeader>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                     </IconButton>
//                 </DrawerHeader>
//                 <Divider />
//                 <List>
//                     <ListItem disablePadding selected={window.location.pathname === '/pages/Home'} sx={{ display: 'block' }} onClick={() => { navigate('/pages/Home') }}>
//                         <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
//                             <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}  >
//                                 <InboxIcon />
//                             </ListItemIcon>
//                             <ListItemText primary={'Analytics'} sx={{ opacity: open ? 1 : 0 }} />
//                         </ListItemButton>
//                     </ListItem>
//                     <ListItem disablePadding selected={window.location.pathname === '/dashboard/users'} sx={{ display: 'block' }} onClick={() => { navigate('/dashboard/users') }}>
//                         <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
//                             <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}  >
//                                 <GroupIcon />
//                             </ListItemIcon>
//                             <ListItemText primary={'Users'} sx={{ opacity: open ? 1 : 0 }} />
//                         </ListItemButton>
//                     </ListItem>
                    
//                 </List>
//             </Drawer>
//         </Box>
//     )
// }

