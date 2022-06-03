import { Box,  } from "@mui/material";
import { useState } from "react";

import CardTableCotisation from "./CardTableCotisation";


const DisplayCotisation = () => {
    const [url, setUrl] = useState("cotisation_afiliers")

    const styleP = {
        cursor: 'pointer',
        background: "rgba(255,0,0,0.7)"
    
    }
    const noSelected = {
        cursor: 'pointer',
    }
    return (<Box>
        <div className="row">
            <div className="col-md-6">
                <p style={url === "cotisation_afiliers" ? styleP : noSelected}
                    
                    onClick={() => setUrl("cotisation_afiliers")} >
                    Cotisation des affiliers
                </p>
           </div>
            <div className="col-md-6">
            <p style={url === "cotisation_detaches" ? styleP : noSelected} onClick={() => setUrl("cotisation_detaches")} >
                    Cotisation des detatches
             </p>
           </div>
        </div>
        { url && <CardTableCotisation url={url} />}
        
    </Box> );
}
 
export default DisplayCotisation;