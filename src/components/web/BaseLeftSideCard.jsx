import { Box, Grid, Typography } from "@mui/material"
import {Link} from "react-router-dom";

const data = [
    {
        title: "Consultation des cotisations pour les affiliers",
        url : "/client-consultation-cotisation-afilier",
        icon : ""
    },
    {
        title: "Consultation des cotisations pour les détaches",
        url : "/client-consultation-cotisation-detaches",
        icon : ""
    },
    {
        title: "Déclaration des accidents",
        url : "/client-declaration-cotisation",
        icon : ""
    },
]
const BaseLeftSideCard = () => {
    return ( 
        <Box
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        aria-label="contacts"
      >
      <Grid item xs={12} md={12}
        sx={{
        textAlign: 'left',
        }}
      >
          {data.map((element, index )=>(
              <p key={index}>
                  <Typography  variant="a">
                    <Link to={element.url}>
                    {element.title}
                    </Link>
                   
                 </Typography>
              </p>
                
        ))}
            
        </Grid>
    </Box>
        
     );
}
 
export default BaseLeftSideCard;