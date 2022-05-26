import { Box } from "@mui/material";
import { useState } from "react";
import usePostData from "../../../utility/usePostData";

const CreateSlideForm = () => {
    const {response, isLoading, error, submitData}  = usePostData()

    const [youtube_title, setYouTubeTitle] = useState("");
    const [youtube_media, setYouTubeMedia] = useState("");

    const sendData = (e) => {
        e.preventDefault();
        console.log('send data');
        const media = {
            youtube_title: youtube_title,
            youtube_media: youtube_media
        }

        submitData("youtube_medias", media)
    }
    return ( <Box>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {response && <p>{JSON.stringify(response)}</p>}
        <form onSubmit={sendData}>
            <input type="text" value={youtube_title} onChange={(e) => setYouTubeTitle(e.target.value)}  placeholder="Title" />
            <input type="text" value={youtube_media} onChange={(e) => setYouTubeMedia(e.target.value)} placeholder="Description" />
            <button type="submit">Enregistrer</button>
        </form>

        </Box> );
}
 
export default CreateSlideForm;