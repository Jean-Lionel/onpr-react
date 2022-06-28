import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";

const AnnonceListe = () => {
    const { data, isLoading, error, refreshSearch, paginate } = useFetchDataWithPagination("annonces");
    const [annonces, setAnnonces] = useState(null);

    useEffect(() => {
        if (data?.data) {
            setAnnonces(data?.data.data);
        }

    }, [data])

    return (<Box>
        {isLoading && <LinearProgress color="success" />}
        <div className="row">
            <div className="col-md-8">
            <h4> Liste des annonces </h4>
            </div>
            <div className="col-md-4">
                <Link to="/annonce-add">ajouter une annonce</Link>
            </div>
        </div>
        <table className="table table-striped table-sm">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Titre</th>
                    <th>Action</th>
                </tr>

            </thead>

            <tbody>
                {annonces && annonces.map((annonce, index )=> (
                    <tr key={annonce.id}>
                        <td>{ index}</td>
                        <td>{annonce.title}</td>
                        <td className="d-flex flex-row">
                            <button className="btn btn-info btn-block btn-sm mr-2">
                                Dépublier
                            </button>
                            <button className="btn btn-danger btn-block btn-sm ml-2">Supprimer</button>
                        </td>
                    </tr>     
               ))}
            </tbody>

        </table>

        {paginate()}
    </Box> );
}
 
export default AnnonceListe;