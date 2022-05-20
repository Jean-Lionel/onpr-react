import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import YoutubeEmbed from './YoutubeEmbed';

export default function YoutubeComponent() {
  return (
    <Card >
        <Grid container spacing={2}>
            <Grid item xs={3}>
            <YoutubeEmbed embedId="VjF0QOvMmCk" />
            </Grid>
            <Grid item xs={3}>
            <YoutubeEmbed embedId="VjF0QOvMmCk" />
            </Grid>
            <Grid item xs={3}>
            <YoutubeEmbed embedId="VjF0QOvMmCk" />
            </Grid>
            <Grid item xs={3}>
            <YoutubeEmbed embedId="VjF0QOvMmCk" />
            </Grid>
        </Grid>
      
    </Card>
  );
}
