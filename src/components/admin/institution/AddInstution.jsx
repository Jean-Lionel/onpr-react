import { 
    Box,Container, 
    FormControl,LinearProgress , 
    InputLabel,OutlinedInput ,TextField, Button, Alert} from "@mui/material";
import {useState , useEffect} from "react"
import { useHistory } from "react-router-dom";
import usePostDate from "../../../utility/usePostData"

const Addinstution = () => {
    
    const {response, isLoading, error, finished,submitData} = usePostDate();
    let history = useHistory();
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [description, setDescription] = useState("")
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
    }, [finished]);

    const saveInputData = async (e) => {
        e.preventDefault();
        const institution = {
            name, description, email,telephone,address,
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
                    Enregistrer
                </Button>
            </FormControl>

 
            
        
        </form>
        </Box> 
        </Container>
        
        );
    }
    
    export default Addinstution;