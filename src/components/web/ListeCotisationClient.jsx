import SearchBar from "material-ui-search-bar";
import { useState } from "react";

const ListeCotisationClient = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [matricule, setMatricule] = useState("");
    const searchInformation = (e) => {
        fetchData()
    }

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/cotisation/client/${matricule}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

  
    return ( <div>
         <SearchBar onChange={setMatricule} size="small" onRequestSearch={searchInformation} placeholder="Saisissez ici votre Numéro matricule ONPR" />
        Liste des cotisations

        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {JSON.stringify(data)}
    </div> );
}
 
export default ListeCotisationClient;