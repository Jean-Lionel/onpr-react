import useFetchData from "../../../utility/useFecthData";

const ListUser = () => {
         let {data: users, isLoading, error} = useFetchData("users");
         let listUser = users?.data?.data
        
    return ( <div>
        <div>
            <h1>Liste des utilisateurs</h1>
        </div>

        <table>
            <thead>
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
                            <button>Modifier</button>
                            <button>Supprimer</button>
                        </td>
                    </tr>
                ))
            }

            </tbody>
        </table>
        
    </div> );
}
 
export default ListUser;