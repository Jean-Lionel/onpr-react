import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import navHeader from '../asset/img/navheader.jpg';
import { CssBaseline } from '@mui/material';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
       <img src={navHeader}  alt="Bar de Footer"  style={{ height: "auto", width: "100%" }}/>
      {'Copyright © '}
      <Link color="inherit" href="https://onpr.bi/">
       ONPR 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} 

    </Typography>
  );
}

function Footer(props) {
 

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Copyright />
      </Container>
    </Box>
  );
}


export default Footer;
