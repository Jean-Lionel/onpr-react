import { Alert, Box, Button, Container, FormControl, InputLabel, LinearProgress, OutlinedInput, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import usePostData from "../../../utility/usePostData";

const EditInstutionForm = () => {
    const {isLoading, error, finished,submitData} = usePostData();
    let history = useHistory();
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [identify, setIdentify] = useState("")
    const [telephone, setTelephone] = useState("")
    const [description, setDescription] = useState("")
    const [typeInstution, setTypeInstution] = useState("DETACHES")
    // address
    // telephone
    // type_istutions
    // email
    // description

    useEffect(() => {
        if(finished){
            history.push("/institution")
        }
        return () => {
           
        };
    }, [finished, history]);

    const saveInputData = async (e) => {
        e.preventDefault();
        const institution = {
            name, description, email,telephone,address,typeInstution,identify
        }
        submitData('institutions',institution)       
        
    }
    return ( 
        
        <Container fixed>
        <Box>
        <h1>Ajouter une Institution</h1>

        {
            isLoading &&  (
                <LinearProgress color="success"/>
            )
        }
        {error && 
            (
                <Alert severity="error">{error}</Alert>
            )
        }
        <form onSubmit={saveInputData}>
            <FormControl fullWidth sx={{ m: 1 }}  size="small">
                <InputLabel htmlFor="name"  size="small">Nom de l'institution</InputLabel>
                <OutlinedInput
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                
                label="Nom de l'institution"
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}  size="small">
                <InputLabel htmlFor="identify"  size="small">Code  de l'institution</InputLabel>
                <OutlinedInput
                id="identify"
                value={identify}
                required
                onChange={(e) => setIdentify(e.target.value)}
                
                label="Code de l'institution"
                />
            </FormControl>

            {/* <FormControl fullWidth sx={{ m: 1 }}  size="small">
            <InputLabel id="demo-simple-select-label">Type d'institution</InputLabel>
            <Select
                 required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeInstution}
                label="Type d'institution"
                onChange={e => setTypeInstution(e.target.value)}
            >
                <MenuItem value="">
                    <em>selectionner le type</em>
                </MenuItem>
                <MenuItem value="DETACHES">DETACHES</MenuItem>
                <MenuItem value="AFFILIERS">AFFILIERS</MenuItem>
            </Select>
            </FormControl> */}

            <FormControl fullWidth sx={{ m: 1 }}  size="small">
                <InputLabel htmlFor="telephone"  size="small">Téléphone</InputLabel>
                <OutlinedInput
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                
                label="Téléphone"
                />
            </FormControl>
        
            
            <FormControl fullWidth sx={{ m: 1 }}  size="small">
                <InputLabel htmlFor="email"  size="small">Email</InputLabel>
                <OutlinedInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                label="Email"
                />
            </FormControl>
            
            <FormControl fullWidth sx={{ m: 1 }}  size="small">
                <InputLabel htmlFor="address"  size="small">Addresse</InputLabel>
                <OutlinedInput
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                
                label="Addresse"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m:1 }} variant="standard">
                <TextField
                id="description"
                label="Description"
                multiline
                rows={4}
                defaultValue=""
                value={description}

                onChange={(e) => (setDescription(e.target.value))}
                />
            </FormControl>
            <FormControl fullWidth sx={{ m:1 }} variant="standard">
                <Button variant="contained" type="submit">
                    Modifier
                </Button>
            </FormControl>
        </form>
        </Box> 
        </Container>
        
        );
}
 
export default EditInstutionForm;