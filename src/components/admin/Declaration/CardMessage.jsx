import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';


export default function CardMessage(props) {
  const message = props.message;
  const history = useHistory();

  const onpenMessage = (message) =>{
    //console.log(message);
    history.push("ricieved-message/"+ message.id)
  }

  return (
    <Card >
      <Box>
        <Grid>
          <Grid  md={12} sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            bgcolor:  (message.is_opened ? 'white' : 'rgba(0,0,0,0.2)')
          }}>
            <div>
              <p>
              Nom de l'instution : <b>{message.nom_instution}</b>
              </p>
              <p>
              Nom du Déclarant : {message.nom_declarant}
              </p>
           
            </div>
            <Typography sx={{
              mr: '10px',
            }} >
              <div>
              <small>Date de déclaration  : {message.date_declaration}</small>
              </div>
              <div>
                <small>
                  <i>
                    Envoyé Le {new Date(message.created_at).toLocaleString()}
                  </i>
                </small>
              
              </div>
              <div>
                  <Button onClick={() => onpenMessage(message)}>
                    Ouvrir La déclaration
                  </Button>
              </div>
            
              </Typography>
           </Grid>
        </Grid>

      </Box>
     
          {/* "nom_instution": "Consequatur nisi off",
            "adresse": "Officia error aut al",
            "telephone": "+1 (172) 516-4906",
            "email": "zeqenahuq@mailinator.com",
            "nom_declarant": "Aut et consequatur",
            "motif_declaration": "<p>Nulla enim qui ullam.</p>",
            "date_declaration": "2015-05-12",
            "victime_name": "Hiroko Beard",
            "victime_prenom": "In amet ipsum deser",
            "victime_matricule": "Id in sunt veritati",
            "victime_fonction": null,
            "type_declaration": null,
            "victime_telephone": "+1 (406) 907-5351",
            "file_name_1": "Voluptatum do repudi",
            "file_justification_1": "1653324834.pdf",
            "file_name_2": "Similique neque et c",
            "file_justification_2": "1653324834.pdf",
            "file_name_3": "Veniam sed aperiam",
            "file_justification_3": "1653324834.pdf",
            "is_opened": 0,
            "created_at": "2022-05-23T16:53:54.000000Z", */}
     </Card>
  );
}