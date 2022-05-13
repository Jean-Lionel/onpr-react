import useFetchData from "../../../utility/useFecthData";

const ListUser = () => {
         let data = useFetchData("articles");

    return ( <div>
        <div>
            <h1>Liste des utilisateurs</h1>
        </div>
        {
            JSON.stringify(data)
        }
    </div> );
}
 
export default ListUser;