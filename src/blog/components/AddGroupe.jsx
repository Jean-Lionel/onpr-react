import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Admin from "../../Pages/Admin";
import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";
import usePostData from "../../utility/usePostData";
import {Link} from "react-router-dom";

const AddGroupe = () => {
    const [title, setTitle] = useState("");
    const { isLoading: saveLoading, finished, error, submitData } = usePostData();
    const { data, isLoading, refreshSearch } = useFetchDataWithPagination("adminheades");
    const [groupes, setGroupes] = useState(null);
    
    useEffect(() => {
        if ( finished) {
            setTitle("")
        }
        if (data?.data) {
            setGroupes(data?.data)
        }
    }, [finished, data])
    const addGroup = (e) => {
        e.preventDefault();
        const x = { title: title };
        submitData("adminheades", x, "POST");
        refreshSearch();
    }

    const deleteTitle = (e) => {
        const response = window.confirm("Vous êtes sûr ")
        if (response) {
            submitData("adminheades/" + e, null, "DELETE");  
            refreshSearch();
        }
    }
    return (<Admin>
        <h6>Ajout un titre</h6>
        <Box sx={{
            width: "80%",
            margin: "auto",
        }}>
            <form action="" >
                <div className="row">
                    <div className="col-md-2">
                    <label htmlFor="" ></label>
                    </div>
                    <div className="col-md-6">
                    <input type="text" id="title"
                        className="col-md-5 form-control form-control-sm"
                        placeholder="Title"
                        value={title}
                        onChange={(e) =>setTitle(e.target.value)}
                    
                        />
                        {error && <div className="alert alert-danger">{JSON.stringify(error.message)}</div>}
                    </div>

                    <div className="col-md-2">
                    <button  type="submit" onClick={ addGroup}>Ajouter</button>
                    </div>
                   
                  
                   
                </div>
                {saveLoading && <LinearProgress color="success" />}
            </form>

            {isLoading && <LinearProgress color="success" />}
            {groupes && (
                <Box>
                    <table className="table-responsive table table-striped table-sm">
                        <thead className="black">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Titre
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupes.map((e, id) => (
                                <tr key={e.id}>
                                    <td>{ id +1}</td>
                                    <td>{e.title}</td>
                                    <td>
                                        <button onClick={() => deleteTitle(e.id)}>Supprimer</button>
                                        <Link to={ `ajouter-contenu/${e.id}`}>Ajouter  du contenu</Link>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </Box>
            ) }
        </Box>

    </Admin> );
}
 
export default AddGroupe;