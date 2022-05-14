import { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Box } from "@mui/material";

const AddArticle = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    const [link, setLink] = useState("")
    let history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        const token = localStorage.getItem("token")
        const article = {
            title: title,
            body: body,
        }
        axios.post("articles/", 
        article,
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
            console.log(error)
        }).finally((e) ={ 
        })
    }
    return ( 
        <Box>
            
        </Box>

     );
}
 
export default AddArticle;