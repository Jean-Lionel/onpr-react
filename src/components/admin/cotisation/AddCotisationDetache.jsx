import { Box , Input, Select, MenuItem,Alert, LinearProgress} from "@mui/material";
import useReadExcel from "../../../utility/useReadExcel";
import {useEffect, useState} from "react"
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostDate from "../../../utility/usePostData";


const  AddCotisationDetache=  () => {
    const [instutionId, setInstutionId] = useState("");
    const {data : institutions } = useFetchDataWithPagination("institutions");
    const {isLoading, error, finished,submitData : saveData} = usePostDate();

    const loadInstitutions = institutions?.data?.data
    const {data,  dataTable, handleFileUpload}  = useReadExcel();

    useEffect(() => {
        return () => {
            
        };
    }, [ finished]);
    const submitData = (e) => {
        e.preventDefault();
        // console.log(data);
        const postData = new FormData()
        postData.append('data', JSON.stringify(data));
        postData.append('institution_id', instutionId);  // name of the file
        
        saveData("cotisations", postData);
        
    }
    return ( 
        <Box>
            <h5>Chargement des données des detachées</h5>
            {error && (
                <Alert severity="error"> {error}</Alert>
            )}

            {isLoading && (
                 <LinearProgress color="success"/>
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
    
 
export default AddCotisationDetache;