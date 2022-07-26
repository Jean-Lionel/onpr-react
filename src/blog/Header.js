import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import logo from "../asset/img/onpr_logo.jpg"
import embleme from "../asset/img/langfr-200px-Blason_du_Burundi.svg.png"
import { Grid, Avatar } from '@mui/material';
import LanguageChanger from '../components/language_changer/language_changer';
import { useSelector } from 'react-redux';

const sections = [
  {
    title: {
      fr: 'Accueil',
      en: 'Home',
    }, url: '/'
  },
  // { title: 'Connaître ONPR', url: '/' },
  {
    title: {
      fr: 'Informations',
      en: 'Informations',
    }, url: '/informations'
  },
  {
    title: {
      en: "Annonces et Communiques",
      fr: "Anounces & News"
    }, url: '/annonce-communique'
  },
  // { title: 'Annonces & Communiqués', url: '#', isId: true},
  {
    title: {
      fr: 'Contacts',
      en: 'Contacts',
    }, url: '#web-footer', isId: true
  },
  {
    title: {
      fr: 'Services en ligne',
      en: 'Online service',
    }, url: '/online-service'
  },
  {
    title: {
      fr: 'Se Connecter',
      en: 'Log in',
    }, url: '/login'
  },
];

export default function Header(props) {

  const { currentLanguage } = useSelector((storeOf) => {
    return { currentLanguage: storeOf.nisys.currentLanguage };
  })

  return <React.Fragment>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'green', backgroundColor: '#e91e63', color: 'green' }}>
      <Grid container spacing={2}>
        <Grid item md={2} xs={2}>
          {/* <img src={logo} alt="Logo de ONPR"  style={{ height: "auto", width: "100px" }}/> */}
          <Avatar
            alt="Logo de ONPR"
            src={logo}
            sx={{ width: { md: "100px", sx: "30px" }, height: { md: "100px", sx: "30px" } }}
            loading="lazy"
          />

        </Grid>
        <Grid item md={8} xs={10}>
          <Typography variant="h6" sx={{
            fontFamily: "cascadia",
            fontSize: { md: "1.2rem", xs: "0.8rem" }
          }} color="white" >
            OFFICE NATIONAL DES PENSIONS ET RISQUES PROFESSIONNELS DES <br />
            FONCTIONNAIRES, DES MAGISTRATS ET DES AGENTS DE L’ORDRE JUDICIAIRE
          </Typography>
        </Grid>
      </Grid>

    </Toolbar>
    <Toolbar
      component="nav"
      variant="dense"
      sx={{
        display: { md: "flex", xs: "grid" },
        gridTemplateColumns: '1fr auto',
        justifyContent: 'space-between',
        textAlign: 'left',
        overflowX: 'auto',
        borderBottom: 1,
        borderColor: 'green'
      }}
    >
      {sections.map((section) => (
        <>
          {section?.isId && <a href={section.url}>{section.title[currentLanguage.code]}</a>}

          {!section?.isId && <Link
            color="inherit"
            noWrap
            key={section.title[currentLanguage.code]}
            variant="body2"
            href={section.url}
            sx={
              {
                p: 1,
                flexShrink: 0,
                display: 'block',
                textAlign: 'left'
              }}
            to={section.url}
          >
            {section.title[currentLanguage.code]}
          </Link>}

        </>
      ))}
      <LanguageChanger />
    </Toolbar>
  </React.Fragment>
}