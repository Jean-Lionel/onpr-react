import { Box, Grid,Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';

const CardDeclaration = (props) => {
    const {declaration} = props;
    const history = useHistory();
    const statusStyle = (status) => {
      switch (status) {
        case 1:
          return "";
        case 0:
          return "rgba(0,255,0,0.2)";
        default:
          return "";
      }
    };
    return ( 
        <Box>
            {declaration && (
             <Grid container spacing={1} sx={{
               backgroundColor: statusStyle(declaration.is_opened),
               '&:hover':{ 
                 cursor: 'pointer',
                 backgroundColor: 'rgba(0,255,0,0.4)',
               }
             }}>
                 <Grid item md={8} sx={{ textAlign : 'left'}}>
                    <div>
                      <h6><i>Titre :</i>  {declaration.titre}</h6>
                    </div>
                      <div>
                    Date de déclaration : <b>{new Date(declaration.date_declaration).toLocaleDateString()}</b>
                    </div>
                 </Grid>
                 
                 <Grid item md={4} sx={{ textAlign: 'right'}}>
                      <div>
                     Transmis : <small> <i>{new Date(declaration.created_at).toLocaleString()}</i> </small>
                     </div>
                     <div>
                     Envoyé par : <i><u> { declaration.user.name }</u></i>
                     </div>
                     
                   <div>
                       <Button size="small" variant="contained" color="primary" onClick={() => {
                            history.push(`show-detail-declaration/${declaration.id}`)
                        }} >
                           <PreviewIcon size="small" color="primary"/> lire
                        </Button>
                   </div>

                      
                 </Grid>
             </Grid>

            )}
           
        </Box> 
         );
}
 
export default CardDeclaration;