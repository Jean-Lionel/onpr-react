import useFetchData from "../../../utility/useFecthData";
import {Box, Button, Fab,Icon} from '@mui/material';
import { DeleteTwoTone, EditNotifications } from "@mui/icons-material";
import { Link, useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';

const ListUser = () => {
    let {data: users, isLoading, error} = useFetchData("users");
    let listUser = users?.data?.data
    const history = useHistory();
        
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
      
        <table className="table table-hover table-sm">
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
                            <Button 
                                size="small"
                                onClick={() => { history.push("edit-user/"+user.id) }}
                            >
                            <Fab size="small" color="secondary" aria-label="edit">
                                <EditIcon />
                            </Fab>
                                
                            </Button>
                            
                            <Fab size="small" color="primary">
                                <DesktopAccessDisabledIcon />
                            </Fab>
                        </td>
                    </tr>
                ))
            }

            </tbody>
        </table>
        
    </div> );
}
 
export default ListUser;