import { Box , Input,Alert, LinearProgress, Grid, Autocomplete, TextField, Button} from "@mui/material";
import useReadExcel from "../../../utility/useReadExcel";
import {useEffect, useMemo, useState} from "react"
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostDate from "../../../utility/usePostData";
const  AddCotisationDetache=  () => {
    const [instutionId, setInstutionId] = useState("");
    const [options, setOptions] = useState([])
    const {data : institutions } = useFetchDataWithPagination("/institutions/groupby/DETACHES");
    const {response, isLoading, error, finished,submitData : saveData} = usePostDate();
    const {data,  dataTable, handleFileUpload}  = useReadExcel();

    const loadInstitutions =  useMemo(()=> institutions?.data ?? [], [institutions])

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
        return () => {
            
        };
    }, [ finished]);
    const submitData = (e) => {
        e.preventDefault();
        // console.log(data);
        const postData = new FormData()
        postData.append('data', JSON.stringify(data));
        postData.append('institution_id', instutionId);  // name of the file
        saveData("cotisations_detaches", postData);
    }
    return ( 
        <Box>
            <h5>Chargement des données des detachées</h5>
            {error && (
                <Alert severity="error"> {JSON.stringify(response)}</Alert>
            )}

            {isLoading && (
                 <LinearProgress color="success"/>
            )}
            {/* {JSON.stringify(loadInstitutions)} */}
        
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
    
 
export default AddCotisationDetache;