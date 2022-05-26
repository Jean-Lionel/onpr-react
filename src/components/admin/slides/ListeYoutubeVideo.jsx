import { Box, Button, Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import YoutubeEmbed from "../../../blog/components/YoutubeEmbed";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";

const ListeYoutubeVideo = () => {
    const { data, isLoading, error , paginate} = useFetchDataWithPagination("youtube_medias");
    const [youtubes, setYoutubes] = useState(null);

    useEffect(() => {
        if(data?.data){
          setYoutubes(data?.data.data)
        }
      },[data])

      const deleteMedia = (id) => {
       
        console.log("delete media .... " );
        alert("delete media .... " + id);
      }

    return ( <Box>
    <Card >
      {isLoading && <p>.... is loading</p>}
        <Grid container spacing={2}>
          {youtubes && youtubes.map((youtube,index) => (
             <Grid item md={3} xs={12} key={index}>
             <YoutubeEmbed embedId={youtube.youtube_media} />
             <Button OnClick={() => deleteMedia(index)}>
                 Supprimer
             </Button>
             </Grid>

          ))}
        </Grid>
      
    </Card>

    </Box> );
}
 
export default ListeYoutubeVideo;