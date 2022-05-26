import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";

const AllowedUserInstution = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useFetchDataWithPagination("get_user_by_instutions/"+id);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(data?.data) {
            setUsers(data?.data)
        }
    }, [data])

    useEffect(() => {

    }, [data])

    return ( <Box>
        <Grid container>
            {isLoading && <div>Loading...</div>}
            <Grid item md={12}>
                <h6>Liste des utilisateurs de l'instution</h6>
                <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" size="small">
                    <TableHead size="small">
                        <TableRow size="small">
                            <TableCell>#</TableCell>
                            <TableCell>Nom et prénom</TableCell>
                            <TableCell>Téléphone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Mobile</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody size="small">
                        {users.map((row, index) => (
                            <TableRow key={row.id} size="small">
                                <TableCell component="th" scope="row">
                                    {index+1}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.telephone}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.mobile}</TableCell>
                                <TableCell>{row.role?.name}</TableCell>
                                <TableCell>
                                    <button>Supprimer</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Box> );
}
 
export default AllowedUserInstution;