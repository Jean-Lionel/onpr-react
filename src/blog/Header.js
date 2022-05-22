import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import logo from "../asset/img/onpr_logo.jpg"
import embleme from "../asset/img/langfr-200px-Blason_du_Burundi.svg.png"
import { Grid,Avatar } from '@mui/material';

const sections = [
  { title: 'Accueil', url: '/' },
  // { title: 'Connaître ONPR', url: '/' },
  { title: 'Information', url: '#' },
  { title: 'Nouvelles', url: '#' },
  { title: 'Annonces & Communiqués', url: '#' },
  { title: 'Contacts', url: '#' },
  { title: 'Services en ligne', url: '/online-service' },
  { title: 'Se Connecter', url: '/login' },
];
function Header(props) {
  
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'green', backgroundColor:'#f50057' }}>

      <Grid container spacing={2}>
          <Grid item xs={2}>
          {/* <img src={logo} alt="Logo de ONPR"  style={{ height: "auto", width: "100px" }}/> */}
          <Avatar
            alt="Logo de ONPR"
            src={logo}
            sx={{ width: 100, height: 100 }}
          />

          </Grid>
          <Grid item xs={8}>
          <Typography variant="h6" color="white" wrap>
           OFFICE NATIONAL DES PENSIONS ET RISQUES PROFESSIONNELS DES <br />
           FONCTIONNAIRES, DES MAGISTRATS ET DES AGENTS DE L’ORDRE JUDICIAIRE
          </Typography>
          </Grid>
          <Grid item xs={2}>
          
          <Avatar
            alt="Emblême du Burundi"
            src={embleme}
            sx={{ width: 100, height: 80 }}
          />
          </Grid>
          
      </Grid>

       
        {/* <Button size="small">ONPR</Button>
        <Typography
          component="h5"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <Link to="login">
        <Button variant="outlined" size="small">
          Se Connecter
         
        </Button>
        </Link> */}
        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', borderBottom: 1, borderColor: 'green' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
            to={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}


export default Header;
