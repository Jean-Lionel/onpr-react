import { Box, Grid } from "@mui/material";
import BasePage from "../BasePage";
import DisplayPdf from "../components/web/component/DisplayPdf";


const OnlineService = () => {
    return ( 
        <BasePage>
            <Box>
            <Grid item xs={12} md={12}>
                <ul>
                    <li>
                        <h5>Quelques formulaire de déclaration pour ONPR</h5>
                    </li>
                    <li>
                    Formulaires pour les Risques Professionnels
                        <ul>
                           <li>Déclaration d’accident par l’employeur(Modèle A1)</li> 
                           <li>Déclaration d’accident par l’employeur(Modèle A2)</li> 
                           <li>Déclaration de maladie professionnelle par l’employeur(Modèle M1)</li> 
                           <li>Déclaration de maladie professionnelle par l’employeur(Modèle M2)</li> 
                           <li>Formulaire de déclaration pour les détachés</li> 
                        </ul>
                    </li> 

                    <li>
                        Formulaires pour les pensions :
                        <ul>
                            <li>Formulaire de demande de pension</li>
                        </ul>
                    </li>

                    </ul>
                    
                    <DisplayPdf/>

        </Grid>
            </Box>
        </BasePage>
    );
}
 
export default OnlineService;