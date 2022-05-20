import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function ListeItemLeft(props) {
  const {data} = props;

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >

      {data.directionGenerale.corps.map((corp, index) => (
        <ListItem disablePadding key={index}>
            <ListItemText primary={corp.label} />
        </ListItem>
      ))}
      
    </List>
  );
}


