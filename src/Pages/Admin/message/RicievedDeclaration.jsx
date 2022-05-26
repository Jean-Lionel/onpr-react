import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import CardDeclaration from "../../../components/admin/Declaration/CardDeclaration";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import Admin from "../../Admin";

const RicievedDeclaration = () => {
    const {data, error, isLoading, paginate } = useFetchDataWithPagination("online_declaration_detaches");
    const [declarations, setdeclaration] = useState(null);

    useEffect(() => {
        if(data?.data){
            setdeclaration(data?.data?.data)
        }
        return {
            setdeclaration: null
        }
    }, [data])

    return ( <Admin>
         <Box sx={{
             margin : {md: "0 60px 0 60px", xs: "0 5px 0 5px"},
         }}>
         {isLoading && <LinearProgress color="success" />}  
         {error && <p>Error: {error.message}</p>}
            <h4>
                <u>Déclaration des instutions</u>
            </h4>
            <Box>
                {declarations && declarations.map(declaration => (
                    <Box key={declaration.id}>
                         <CardDeclaration declaration={declaration} />
                    <hr />
                    </Box>
                ))}
             </Box>
             {paginate()}
        </Box>
    </Admin> );
}
 
export default RicievedDeclaration;