import { Box , Input, Select, MenuItem,Alert, Autocomplete, TextField, Button, Grid} from "@mui/material";
import useReadExcel from "../../../utility/useReadExcel";
import {useEffect, useMemo, useState} from "react"
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostDate from "../../../utility/usePostData";
import { useHistory } from "react-router-dom";

const AddCotisationAfilier = () => {
    const [instutionId, setInstutionId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [options, setOptions] = useState([])
    const {data : institutions } = useFetchDataWithPagination("/institutions/groupby/AFFILIERS");
    const {response, isLoading, error, finished,submitData : saveData} = usePostDate();

    const loadInstitutions =  useMemo(()=> institutions?.data ?? [], [institutions])
    const history = useHistory();

    useEffect(() => {
        const elts = loadInstitutions.map(element => {
            return {
                label: element.name,
                value: element.id
            }
        })
        setOptions(elts)

    }, [loadInstitutions])

    useEffect(() => {
       
        if(finished) {
            history.push("/cotisations");
        }
        return () => {
            
        };
    }, [finished,history]);

    const {data,  dataTable, handleFileUpload}  = useReadExcel();
   
    const submitData = (e) => {
        e.preventDefault();
        // console.log(data);
        const postData = new FormData()
        postData.append('data', JSON.stringify(data));
        postData.append('institution_id', instutionId);  // name of the file
        
        saveData("cotisations", postData); 

        // axios.post("cotisations", postData)
        // .then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err);
        //     setErrorMessage(err.response.data.message);
        // })
        
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

            <Grid container spacing={2}>
                <Grid item>
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300 }}
                    required
                    renderInput={(params) => <TextField {...params} size="small" label="INSTUTION" />}

                    onChange={(event, v) => {setInstutionId(v?.value)}}
                />
                </Grid>
                <Grid item sx={{m: 2}}>
                <Input required type="file"  label="Chargement du fichier excel"  accept="csv,xlsx,xls"   onChange={handleFileUpload}/>
                </Grid>
                <Grid item sx={{m: 2}}>
                <Button type="submit" variant="contained"  >Enregistrer</Button>
                </Grid>

            </Grid>
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