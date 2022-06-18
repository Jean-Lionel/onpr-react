import { Box, Container, Grid, LinearProgress } from "@mui/material";
import Footer from "../blog/Footer";
import Header from "../blog/Header";
import {useParams} from "react-router-dom"
import useFetchData from "../utility/useFecthData";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";

const DetailBlog = () => {
    const { id } = useParams();
    const { data, isLoading } = useFetchData("articles/" + id);
    const [artcle, setArtcle] = useState(null);

    useEffect(() => {

        if (data?.data) {
            setArtcle(data.data)
        }

    }, [data, artcle])
    return (<Box>
         <Container maxWidth="lg">
            <Header />
            {isLoading && <LinearProgress color="success" />}

            <Box>
                <Grid container spacing={2}>
                    {artcle && (
                    <Grid item md={12}>
                        <h4>
                            {artcle.title}
                        </h4>

                        <div>
                            <img src={artcle.image_source_url} className="container-fluid" alt={artcle.title } />
                        </div>

                        <ReactQuill
                            value={artcle.body}
                                readOnly={true}
                                modules = {{
                                    toolbar : false,
          
                                }}
                        
                            />
                            
                            <div>
                                <small>
                                    Partagé le  { new Date(artcle.created_at).toLocaleDateString() } 
                                </small>
                            </div>
                        </Grid>
                     )} 

                </Grid>

                
            </Box>  
        </Container>
        <Footer />
    </Box>);
}
 
export default DetailBlog;