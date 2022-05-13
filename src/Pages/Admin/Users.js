import ListUser from "../../components/admin/users/ListUser";
import Admin from "../Admin";

const Users = () => {
    return ( 
        <Admin>
            <p>
                Je suis un Millionnaire
            </p>
            <div>
                <ListUser/>
            </div>
        </Admin>
    );
}
 
export default Users;