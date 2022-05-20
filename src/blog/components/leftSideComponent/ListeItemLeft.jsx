import * as React from 'react';

import { Box, Grid, Paper, Typography } from '@mui/material';
import Link from 'react-router-dom/Link';


export default function ListeItemLeft(props) {
  const {data} = props;

  return (
    <Box
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
    <Grid item xs={12} md={12}>

      {data.map(element =>(
        <div>
           <Typography variant="h6" gutterBottom >
            {element.title}
          </Typography>
          
            {element.corps.map((archive, index) => (
              <Link style={{ display: 'block', textAlign: 'left'}}  to={index} key={archive.index}>
                {archive.label}
              </Link>
            ))} 
            </div>
          ))}
     
      </Grid>
      
    </Box>
  );
}


