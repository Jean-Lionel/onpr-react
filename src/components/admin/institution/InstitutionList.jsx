import { Box , TableContainer, TableHead, TableBody, TableCell, Table, TableRow,Paper } from "@mui/material";
import {useEffect, useState} from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import useSearchInput from "../../../utility/useSearchInput";
import SearchBar from "../component/SearchBar";

const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => JSON.stringify(d).toLowerCase().includes(query));
    }
  };

const InstitionList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const {data : institutions ,isLoading, error, paginate} = useFetchDataWithPagination("institutions");

    const info = filterData(searchQuery,institutions?.data?.data)

    
   useEffect(() => {
    
       return () => {
       };
   }, [paginate, isLoading,error ]);

    return ( <Box>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <SearchBar setSearchQuery={setSearchQuery}/>
        <h1>Institution</h1>
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