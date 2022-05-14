import { Box, FormControl, InputLabel, Input, InputAdornment, Button, Alert } from "@mui/material";
import { useState } from "react";
//import usePostData from "../../../utility/usePostData";
import axios from "axios"
import { useHistory } from "react-router-dom";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("")
    const history = useHistory();
  
    const submitData = async (e) => {
        e.preventDefault();

        if(!name || !email || !password){
            setError("Completez tout les champs !!");
            return
        }
        setIsLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post('register/', {
                name,
                email,
                password
            },{
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            // console.log(response.data.access_token, response.data.data);
            // localStorage.setItem('token', response.data.access_token);
            // localStorage.setItem('user', JSON.stringify(response.data.data));
            setIsLoading(false);
            // window.location.href = '/admin';
            history.push("/users")
            console.log(response.data)
        } catch (error) {
            setError(error.response.data.message);
            setIsLoading(false);
        }
       
    }

    return ( <Box>
        <div>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="name">Nom et Prénom *</InputLabel>
          <Input
            id="name"
            value={name}
            required
            onChange={(e) => (setName(e.target.value))}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="email">Email *</InputLabel>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="password">Mot de passe *</InputLabel>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
          />
        </FormControl>
        {isLoading && ( 
            <div>
                Is Loading...
            </div>
        )}
        {error && (
            <Alert severity="error">{ error }</Alert>
        )}
        <Button variant="contained" type="submit" onClick={submitData}>Enregistrer</Button>
        </div>

    </Box> );
}
 
export default AddUser;