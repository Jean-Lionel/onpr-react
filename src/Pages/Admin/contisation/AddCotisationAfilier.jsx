import { Box , Input, Select, MenuItem,Alert} from "@mui/material";
import useReadExcel from "../../../utility/useReadExcel";
import {useState} from "react"
import axios from "axios";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";

const AddCotisationAfilier = () => {
    const [instutionId, setInstutionId] = useState("");
    const {data : institutions ,isLoading, error, paginate,searchIntoDatabase} = useFetchDataWithPagination("institutions");
    
    const loadInstitutions = institutions?.data?.data
    const {data,  dataTable, handleFileUpload}  = useReadExcel();
    const [errorMessage, setErrorMessage] = useState("");
    const submitData = (e) => {
        e.preventDefault();
        // console.log(data);
        const postData = new FormData()
        postData.append('data', JSON.stringify(data));
        postData.append('institution_id', instutionId);  // name of the file
        
        axios.post("cotisations", postData)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
            setErrorMessage(err.response.data.message);
        })
        
    }
    return ( 
        <Box>
            {errorMessage && (
                <Alert severity="error"> {errorMessage}</Alert>
            )}
        
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div>
        <form onSubmit={submitData}>
        <h5>Chargement des données afiliers</h5>
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Age"
        size="small"
        width="200px"
        required
        value={instutionId}
        onChange={(e) => setInstutionId(e.target.value)}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            {loadInstitutions && loadInstitutions.map(e=>(
                <MenuItem value={e.id}>{e.name}</MenuItem>
            ))}
            
           
        </Select>
        <Input  type="file"  label="Chargement du fichier excel"   accept=".csv,.xlsx,.xls"  onChange={handleFileUpload}/>
        <button type="submit" onClick={submitData}>Enregistrer</button>
        </form>
        </div>
        </Box>
        <div>
        { dataTable()}
        </div>
        </Box>
        );
    }
    
    export default AddCotisationAfilier;