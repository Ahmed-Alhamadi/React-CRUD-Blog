import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
     <Box >
      <AppBar position="static" sx={{ background : '#455444' }}>
        <Toolbar>
          
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Api Project
          </Typography>
          <Button
  component={Link}
  to='/'
  color="inherit"
  sx={{
    fontWeight: '500',
    fontSize: '18px',
    transition: 'all 0.3s ease-in-out',
    "&:hover": {
      backgroundColor: '#857',
      fontWeight: '600',
      transform: 'scale(1.1)'
    }
  }}
>
  Home
</Button>

           <Button
  component={Link}
  to='/add'
  color="inherit"
  sx={{
    fontWeight: '500',
    fontSize: '18px',
    transition: 'all 0.3s ease-in-out',
    "&:hover": {
      backgroundColor: '#857',
      fontWeight: '600',
      transform: 'scale(1.1)'
    }
  }}
>
  Add
</Button>

        </Toolbar>
      </AppBar>
    </Box>
  )
}
