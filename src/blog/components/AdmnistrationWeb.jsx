import { Box } from "@mui/material";
import { Link} from "react-router-dom";

const AdmnistrationWeb = () => {
    return (<Box>
        <ul>
            <li>
                <Link to="add-groupe" className=""> Groupe</Link>
            </li>
            
        </ul>
       
    </Box> );
}
export default AdmnistrationWeb;