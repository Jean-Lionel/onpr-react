import { Box,  } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";



const DisplayCotisation = () => {
    const [url, setUrl] = useState("cotisation_afiliers")

    const { data } = useFetchDataWithPagination('list_chargements');

    const [donnes, setDonnes] = useState(null);

    useEffect(() => {
        if (data?.data) {
            setDonnes(data?.data)
        }

    }, [data])

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
                <div>
                  
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Activité No</th>
                                <th>Nombre Total</th>
                                <th>Date</th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {donnes && donnes.affilies && donnes.affilies.map((e, i)=> (
                                <tr key={i} >
                                    <td>{ i+1}</td>
                                    <td>{ e.traitement}</td>
                                    <td>{ e.total_ligne}</td>
                                    <td>{e.created_at}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning">
                                            annuler
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
           </div>
            <div className="col-md-6">
            <p style={url === "cotisation_detaches" ? styleP : noSelected} onClick={() => setUrl("cotisation_detaches")} >
                    Cotisation des detatches
                </p>
                
                <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                            <th>Activité No</th>
                            <th>Nombre Total</th>
                                <th>Date</th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {donnes && donnes.detaches && donnes.detaches.map((e, i)=> (
                                <tr key={i} >
                                    <td>{ i+1}</td>
                                    <td>{ e.traitement}</td>
                                    <td>{ e.total_ligne}</td>
                                    <td>{e.created_at}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning">
                                            annuler
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

           </div>
        </div>
       
        {/* { url && <CardTableCotisation url={url} />} */}
        
    </Box> );
}
 
export default DisplayCotisation;