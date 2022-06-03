import { Box, Grid } from "@mui/material";
import BasePage from "../BasePage";
import declaration_accident_de_travail_model_A2 from "../asset/pdf/declaration_accident_de_travail_model_A2pdf.pdf"
import declaration_accident_de_travail from "../asset/pdf/declaration_accident_de_travail.pdf"
import formatm1 from "../asset/pdf/formatm1.pdf"
import formatm2 from "../asset/pdf/formatm2.pdf"
import formulairepension from "../asset/pdf/formulairepension.pdf"


const OnlineService = () => {

    const styleUl = {
        ul: {
            textAlign: "left",

        },
        li: {
            listStyle: "none"
        }
    }
    return ( 
        <BasePage>
            <Box>
            <Grid item
             xs={12} md={12}>
                <ul style={styleUl.ul} className="group-list">
                    <li>
                        <h5>Quelques formulaire de déclaration pour ONPR</h5>
                    </li>
                    <li>
                    Formulaires pour les Risques Professionnels
                        <ul>
                                <li>
                                    <a href={declaration_accident_de_travail_model_A2} target="_blank" rel="noreferrer" >
                                    Déclaration d’accident par l’employeur(Modèle A1)
                                    </a>
                                </li> 
                                <li>
                                    <a href={declaration_accident_de_travail} target="_blank" rel="noreferrer">
                                    Déclaration d’accident par l’employeur(Modèle A2)
                                    </a>
                                </li> 
                                <li>
                                    <a href={formatm1} target="_blank" rel="noreferrer">
                                    Déclaration de maladie professionnelle par l’employeur(Modèle M1)
                                   </a>
                                </li> 
                                <li>
                                    <a href={ formatm2} target="_blank" rel="noreferrer">
                                    Déclaration de maladie professionnelle par l’employeur(Modèle M2)
                                    </a>
                                </li> 
                                <li>
                                    <a href={formulairepension} target="_blank" rel="noreferrer">
                                    Formulaire de déclaration pour les détachés
                                    </a>
                                </li> 
                        </ul>
                    </li> 

                    <li>
                        Formulaires pour les pensions :
                        <ul>
                                <li>
                                    <a href="#" target="_blank">
                                    Formulaire de demande de pension
                                    </a>
                            </li>
                        </ul>
                    </li>

                    </ul>
                    

        </Grid>
            </Box>
        </BasePage>
    );
}
 
export default OnlineService;