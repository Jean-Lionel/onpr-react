import { Box, Grid, Typography } from "@mui/material"
import {Link} from "react-router-dom";

const data = [
    {
        title: "Consultation des cotisations",
        url : "/client-consultation-cotisation",
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
                <Typography key={index} variant="a">
                    <Link to={element.url}>
                    {element.title}
                    </Link>
                   
                 </Typography>
        ))}
            
        </Grid>
    </Box>
        
     );
}
 
export default BaseLeftSideCard;