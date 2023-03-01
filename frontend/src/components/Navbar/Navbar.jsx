
  import * as React from 'react';
  import { styled,  useTheme } from '@mui/material/styles';
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
  import InboxIcon from '@mui/icons-material/MoveToInbox';
  import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
  
  const drawerWidth = 240;
  

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
  
  const Navbar = () => {
    const theme =  useTheme();
    const [open, SetOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      SetOpen(true);
    };
  
    const handleDrawerClose = () => {
      SetOpen(false);
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
            <Typography variant="h6" noWrap component="div" >
             Fleyer List
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
            <ListItem >
              <ListItemButton>
                <Link to='/'>
                Flyers
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <Link to='/sub-flyer'>
                SubFlyers
                </Link>
             
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />
        </Drawer>
      </Box>
    );
  
}

// return (
//   <Box sx={{ flexGrow: 1 }}>
//   <AppBar >
//     <Toolbar variant="dense">
//       <IconButton edge="start" color="inherit" aria-label="menu" >
//       </IconButton>

//       <Button variant="h6" color="inherit" component="div">
//         flyers
//       </Button>
//       <Button variant="h6" color="inherit" component="div" style={{width:'100px', float:'right', marginLeft:'12px'}}>
//        subflyers
//       </Button>
//     </Toolbar>

//   </AppBar>
// </Box>
// )


export default Navbar
