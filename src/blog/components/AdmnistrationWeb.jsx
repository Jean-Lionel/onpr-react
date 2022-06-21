import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

const AdmnistrationWeb = () => {
    return (<Box>
        <ul className="list-unstyled d-flex">
            <li>
                <Link to="/add-groupe" className=""> <GroupWorkIcon />  Groupe</Link>
            </li>
            <li>
                <Link to="/add-formulaire" className=""> <FormatColorTextIcon /> Formulaire de déclaration</Link>
            </li>
            
            <li>
            <Link to="/admin-article" className=""><ArticleIcon />  Articles</Link>
            </li>
            <li>
            <Link to="/admin-slides" className=""><SlideshowIcon />  Vidéo</Link>
            </li>
            
        </ul>
       
    </Box> );
}
export default AdmnistrationWeb;