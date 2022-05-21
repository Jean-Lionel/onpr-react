import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './blog/Header';
import MainFeaturedPost from './blog/MainFeaturedPost';
import LeftSideCard from './blog/components/LeftSideCard';
import SomeDefaultComponent from './blog/components/SomeDefaultComponent';
import RightSideCard from './blog/components/RightSideCard';
import BlogArticlesListe from './blog/Articles/BlogArticlesListe';
import YoutubeComponent from './blog/components/YoutubeComponent';
import GoogleMap from './blog/components/GoogleMap';
import Footer from './blog/Footer';

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

export default function BasePage(props ) {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="L’Office National des Pensions et Risques Professionnels des fonctionnaires, des magistrats et des agents de l’ordre judiciaire (ONPR)" sections={sections} />
        <main>
         
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
          {/* <BlogArticlesListe/>
          <YoutubeComponent/>
          <GoogleMap/> */}
          
        </main>
      </Container>
      <Footer
       
      />
    </ThemeProvider>
  );
}
