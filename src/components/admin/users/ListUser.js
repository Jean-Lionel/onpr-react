import {Box, Button, Fab,Icon} from '@mui/material';
import { Link, useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import { useEffect } from 'react';
import usePostData from '../../../utility/usePostData';

const ListUser = () => {
    let { data: users, isLoading, error, paginate , refreshSearch } = useFetchDataWithPagination("users");
    const {  submitData } = usePostData();
    let listUser = users?.data?.data
    const history = useHistory();

    useEffect(() => {
    
        return () => {
        };
    }, [paginate, isLoading,error ]);

    const deleteUser = (id) => {
       
        const check = Math.random().toString(36).slice(2, 7);
        const response = window.prompt("Etes vous sûr ? Tapez : " + check)
        if (response === check) {
            submitData("/users/"+id,null,"DELETE")
            refreshSearch()
        }
    }
        
    return ( <div>
        <div>
        <h4>Liste des utilisateurs</h4>
            {isLoading && (
                <div>
                    {
                        isLoading
                    }
                </div>
            )}
            {error && (
                <span className="error-message"> {error}</span>
            )}
        </div>
        <Box sx={{
            textAlign: "right",
            marginRight: 2
        }}>
        <Link to="admin-add-user">
         <Icon>add_circle</Icon> Ajouter un utilisateur
        </Link>
       </Box>
      
        <table className="table table-hover table-sm table-responsive">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nom et Prénom </th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Mobile</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                listUser && listUser.map((user, index) =>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>{user?.telephone}</td>
                        <td>{user?.mobile}</td>
                        <td>{user?.role?.name}</td>
                       
                        <td>
                        <Fab size="small" color="secondary" aria-label="edit"
                                    onClick={() => { history.push("edit-user/"+user.id) }} >
                                    <EditIcon />
                            </Fab>
                            <Fab size="small" color="primary" onClick={() => deleteUser(user?.id) } >
                                <DesktopAccessDisabledIcon />
                            </Fab>
                        </td>
                    </tr>
                ))
            }

            </tbody>
        </table>
       
        {paginate()}
        
    </div> );
}
 
export default ListUser;