import AdminFooter from "../components/admin/AdminFooter";
import AdminHeader from "../components/admin/AdminHeader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) => {
    return ( <div>
        <AdminHeader/>
          <ToastContainer/>
          {props.children}
        <AdminFooter/>  
    </div> );
}
 
export default Admin;