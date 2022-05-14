import { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

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
    return ( <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="title"></label>
                    <input type="text" id="title" placeholder="title" title="Title HHHHH" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="body"></label>
                <textarea   cols="30" rows="10"  name="body"  onChange={(e) => setBody(e.target.value)}>{body}</textarea>
                </div>
                <div>
                    <label htmlFor="file"></label>
                    <input type="text" placeholder="link"  name="link" value={link} onChange={(e) => setLink(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-save">
                    Enregistrer
                </button>
            </div>
        </form>
    </div> );
}
 
export default AddArticle;