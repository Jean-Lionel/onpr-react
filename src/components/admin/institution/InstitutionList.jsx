import { Box , TableContainer, TableHead, TableBody, TableCell, Table, TableRow,Paper, Grid , Item} from "@mui/material";
import {useEffect, useState} from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import SearchBar from "../component/SearchBar";
import {Link} from "react-router-dom"

const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => JSON.stringify(d).toLowerCase().includes(query));
    }
  };

const InstitionList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const {data : institutions ,isLoading, error, paginate,searchIntoDatabase} = useFetchDataWithPagination("institutions");
    const info = filterData(searchQuery,institutions?.data?.data);

    const updateSearch = (e) => {
        e.preventDefault();
        if(searchQuery === "") {
            //Recuperer tout les données
            searchIntoDatabase("institutions/search/ALL_DATA");
        }else{
            searchIntoDatabase("institutions/search/" + searchQuery );
        }
        
    }

   useEffect(() => {
    
       return () => {
       };
   }, [paginate, isLoading,error ]);

    return ( <Box>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
    
        <Grid container style={{
            backgroundColor: "#abc"
        }}>
            <Grid item xs={6}>
                <h4>Institution</h4>
            </Grid>
            <Grid item xs={5}>
            <SearchBar setSearchQuery={setSearchQuery}  handleSubmit={updateSearch}/>
            </Grid>
            <Grid item xs={1}>
                <Link to="/institutions/add"><button>Nouveau</button></Link>
            </Grid>
        </Grid>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Website</TableCell>
                        <TableCell>Created At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                info && (info).map(institution => {
                    return (
                        <TableRow key={institution.id}>
                            <TableCell>{institution.name}</TableCell>
                            <TableCell>{institution.address}</TableCell>
                            <TableCell>{institution.city}</TableCell>
                            <TableCell>{institution.country}</TableCell>
                            <TableCell>{institution.telephone}</TableCell>
                            <TableCell>{institution.email}</TableCell>
                            <TableCell>{institution.website}</TableCell>
                            <TableCell>{institution.created_at}</TableCell>
                        </TableRow>
                    )
                
                })
            }
        
                </TableBody>
            </Table>
        </TableContainer>

        {paginate()}
    </Box> );
}
 
export default InstitionList;