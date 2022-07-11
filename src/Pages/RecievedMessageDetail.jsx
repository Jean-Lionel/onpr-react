import useGetConnectedUser from "../utility/useGetConnectedUser";
import Admin from "./Admin";
import DetailMessage from "./Admin/message/DetailMessage";

const RecievedMessageDetail = () => {
    const {user} = useGetConnectedUser();
    return (<Admin>
        {(user.isAdmin() || user.isChefRecouvrement()) &&  <DetailMessage/>}
       
    </Admin> );
}
 
export default RecievedMessageDetail;