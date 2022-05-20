import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import ListeItemLeft from './leftSideComponent/ListeItemLeft';

function LeftSideCard(props) {

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <ListeItemLeft data={leftData}/>
          </CardContent>
          
        </Card>
      </CardActionArea>
    </Grid>
  );
}

const leftData = {
  directionGenerale: {
      title: 'Direction Générale',
      corps: [
        {
          label: 'Secrétariat',
        },
        {
          label: 'Conseillers',
        },
        {
          label: 'Agences',
        },
        {
          label: 'Cellule Communication et Relations Publiques',
        },
        {
          label: 'Cellule Informatique',
        },
        {
          label: 'Médecin Conseil',
        },
        {
          label: 'Actuaire',
        },
        {
          label: 'Audit Interne',
        },
        {
          label: 'Bibliothèque et Archives',
        },
      ]
  }

}


export default LeftSideCard;


