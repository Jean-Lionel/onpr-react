import useFetchData from "../../../utility/useFecthData";
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';

const ListUser = () => {
         let {data: users, isLoading, error} = useFetchData("users");
         let listUser = users?.data?.data
        
    return ( <div>
        <div>
            <h1>Liste des utilisateurs</h1>
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
        <Button variant="contained">Hello World</Button>
        <table className="table table-hover table-sm">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nom et Prénom </th>
                    <th>Email</th>
                    <th>Téléphone</th>
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
                        <td>{user?.role}</td>
                       
                        <td>
                            <button className="btn btn-warning btn-sm" type="button">Modifier</button>
                            <button className="btn btn-danger btn-sm">Supprimer</button>
                        </td>
                    </tr>
                ))
            }

            </tbody>
        </table>
        
    </div> );
}
 
export default ListUser;