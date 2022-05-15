import { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Box, FormControl, Input, InputLabel , TextField,Button, FilledInput} from "@mui/material";

const AddArticle = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    const [selectedFile, setSelectedFile] = useState("")
    const [error, setError] = useState("")
    let history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        const token = localStorage.getItem("token")
        const data = new FormData()

        data.append("title", title)
        data.append("body", body)
        data.append("image", selectedFile)
        
        axios.post("articles/", 
            data,
            {
                headers: {
                    Authorization: "Bearer " +token 
                    }
            }
        )
        .then(function (response) {
            console.log(response)
            history.push("/admin-article");
        })
        .catch(function (error) {
            setError(error.response.data)
            console.log(error)
        }).finally((e) ={ 
        })
    }
    return ( 
        <Box 
        sx={{
            width: "80%",
            margin: "auto",
           
          }}
        >
            {JSON.stringify(error)}
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input
                id="title"
                value={title}
                onChange={(e) => (setTitle(e.target.value))}
                ></Input>

            </FormControl>

            <FormControl fullWidth sx={{ m:1 }} variant="standard">
                <TextField
                id="body"
                label="Description"
                multiline
                rows={4}
                defaultValue=""

                onChange={(e) => (setBody(e.target.value))}
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <FilledInput
                type="file"
                id="image"
                label="Image"

                onChange={(e) => (setSelectedFile(e.target.files[0]))}              
                ></FilledInput>
            </FormControl>

            <Button
            variant="contained"
            onClick={handleSubmit}
            >
                Enregistrer
            </Button>
                

        </Box>

     );
}
 
export default AddArticle;