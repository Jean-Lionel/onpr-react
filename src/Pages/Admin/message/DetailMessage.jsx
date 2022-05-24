import { Box, LinearProgress } from "@mui/material";
import {useParams} from "react-router-dom";
import useFetchData from "../../../utility/useFecthData";

const DetailMessage = () => {
    let { id } = useParams();

    const {data, isLoading, error} = useFetchData(`declarations/${id}`);

    return ( <Box>
        
        {isLoading && <LinearProgress  color="success" />}
        {error && <p>Error: {JSON.stringify(error)}</p>}
        

        {JSON.stringify(data, null, 2)}

    </Box> );
}
 
export default DetailMessage;