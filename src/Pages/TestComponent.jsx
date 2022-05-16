import Admin from "./Admin";
import {useState} from "react";
import data from "../data/database.json"
import ReactPaginate from "react-paginate";


const TestComponent = () => {
    const [users, setUsers] = useState(data);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pageVisited = usersPerPage * pageNumber;
    const displayUsers = users.slice(pageVisited, pageVisited + usersPerPage).map(user => {
        return(
            <div key={user.id} >
            {user.name}
            </div>
        )
    });
    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    };
    return ( <Admin>
           {displayUsers}
           <ReactPaginate
           previousLabel={"Précedent"}
           nextLabel={"Suivant"}
           pageCount={pageCount}
           onPageChange={changePage}
           containerClassName={"paginationBttns"}
           previousClassName=""
           activeClassName={"paginationActive"}
           />
    </Admin> );
}
 
export default TestComponent;