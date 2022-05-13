import AdminFooter from "../components/admin/AdminFooter";
import AdminHeader from "../components/admin/AdminHeader";

const Admin = (props) => {
    return ( <div>
        <AdminHeader/>
          {props.children}
        <AdminFooter/>  
    </div> );
}
 
export default Admin;