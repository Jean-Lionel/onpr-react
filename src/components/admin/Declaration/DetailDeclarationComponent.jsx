import { Alert, Box, Grid, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import {useParams} from "react-router-dom";
import useFetchData from "../../../utility/useFecthData";


const DetailDeclarationComponent = () => {
    let { id } = useParams();
    const {data, isLoading, error } = useFetchData("online_declaration_detaches/"+id)
    const [declaration, setDeclaration] = useState(null);
    const [userName , setUserName] = useState(null);

    useEffect(() => {
        if(data){
            setDeclaration(data?.data.declaration)
            setUserName(data?.data.user)
        }
        return () => {
            setDeclaration(null)
        };
    }, [data]);

    return ( <Box>
        {isLoading && <LinearProgress color="success" />}
        {error && <Alert >
                {JSON.stringify(error)}
            </Alert>}
       {declaration && <Box>
           {JSON.stringify(declaration)}

           <Grid container spacing={2}>
               <Grid item md={8} sx={{ textAlign: 'left'}}>
               <h6>Tire de la déclaration : <b>{declaration.titre}</b></h6>
               <h6>Code de l'institution : <b>{declaration.code_instution}</b></h6>
               <h6> Déclaration du : <b>{declaration.mois} / {declaration.annee}</b></h6>
               </Grid>
                <Grid item md={4} sx={{ textAlign: 'right'}}>
                    <div>
                    Date de déclaration : <b>{new Date(declaration.date_declaration).toLocaleDateString()}</b> 
                    </div>
                    <div>
                    Envoyé par : <small><b>{userName}</b></small>
                    </div>
                </Grid>
                <Grid item md={8}>
                    <ReactQuill
                value={declaration.description}
                readOnly= {true}
                modules = {{
                    toolbar : false,

                    }}
                    theme = "snow"
                />

                </Grid>
               
               <Grid item md={4}>
                   <h6>Les documents attachés</h6>
                   <div>

                   </div>
               </Grid>

           </Grid>
           
           

             

           
        </Box>}
    </Box> );
}
 
export default DetailDeclarationComponent;