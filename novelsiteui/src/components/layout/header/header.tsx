import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>   
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web Novel MTL 
          </Typography>
          <Container sx={{ 
              flexGrow: 1,
              display: 'flex',
              gap: '1rem' 
              }}>
            <Typography color="inherit" component={Link} to={'/home'}>
                Home
            </Typography>
            <Typography color="inherit" component={Link} to={'/novels'}>
                Novels
          </Typography>
          </Container>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
