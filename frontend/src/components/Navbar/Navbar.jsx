import React from 'react'

import{ Typography ,Toolbar, Box, AppBar , IconButton, Button}  from '@mui/material';

//import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
       
        <Button variant="h6" color="inherit" component="div">
          flyers
        </Button>
        <Button variant="h6" color="inherit" component="div" style={{width:'100px', float:'right', marginLeft:'12px'}}>
         subflyers
        </Button>
      </Toolbar>
        
    </AppBar>
  </Box>
  )
}

export default Navbar
