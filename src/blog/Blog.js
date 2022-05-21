import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';
import LeftSideCard from './components/LeftSideCard';
import RightSideCard from './components/RightSideCard';
import GoogleMap from './components/GoogleMap';
import YoutubeComponent from './components/YoutubeComponent';
import SomeDefaultComponent from './components/SomeDefaultComponent';
import BlogArticlesListe from './Articles/BlogArticlesListe';
//Connaître ONPR || Information || Nouvelles || Annonces & Communiqués || Contacts
const sections = [
  { title: 'Connaître ONPR', url: '#' },
  { title: 'Information', url: '#' },
  { title: 'Nouvelles', url: '#' },
  { title: 'Annonces & Communiqués', url: '#' },
  { title: 'Contacts', url: '#' },
  { title: 'Services en ligne', url: '#' },
  { title: 'Se Connecter', url: '/login' },
];

const theme = createTheme();

export default function Blog() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="L’Office National des Pensions et Risques Professionnels des fonctionnaires, des magistrats et des agents de l’ordre judiciaire (ONPR)" sections={sections} />
        <main>
          <MainFeaturedPost />
          <Grid container spacing={2}>

            <Grid item xs={12} md={3}>
             <LeftSideCard/>
            </Grid>
            
            <Grid item xs={12} md={6}>
             <h1>A</h1>
             <SomeDefaultComponent></SomeDefaultComponent>
            </Grid>
            <Grid item xs={12} md={3}>
             <RightSideCard/>
            </Grid>
          </Grid>
          <BlogArticlesListe/>
          <YoutubeComponent/>
          <GoogleMap/>
          
        </main>
      </Container>
      <Footer
       
      />
    </ThemeProvider>
  );
}
