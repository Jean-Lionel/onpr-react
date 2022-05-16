import useFetchData from "../../../utility/useFecthData";
<<<<<<< HEAD
import { Link } from "react-router-dom"
import DataTable from "../../../Test/DateTabeleTest";
import '../../../styles/web.css'
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ArticleList = () => {
    let { data: articles, isLoading, error } = useFetchData("articles");
    let articlesList = articles?.data?.data

    return (
        <div>

            {/* <DataTable /> */}
=======
import {Link} from "react-router-dom"
import DateTabeleTest from "../../../test/DateTabeleTest";
import CardArticle from "./CardArticle";
import { CardMedia,Box, Avatar } from "@mui/material";

const ArticleList = () => {
    let {data: articles, isLoading, error} = useFetchData("articles");
         let articlesList = articles?.data?.data
    return ( 
        <Box

        sx={{
            width: "90%",
            margin: "auto",
            
          }}
        
        >        
>>>>>>> 4e6d7dd365365e46ed36e9825b3c39fc777b5593
            <h1>
                Liste des articles
            </h1>
            <Link to="/admin-article-add">
                <p>
                    Ajouter un Article
                </p>
            </Link>
<<<<<<< HEAD
            {isLoading && (
                <div>
                    Loading...
                </div>
            )}

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* {Array.from(Array(6)).map((_, index) => ( */}
                    {articlesList && articlesList.map((article, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>
                                <h3>{article.title}</h3>
                                <h5>{article.body}</h5>
                                <div class="image">
                                    {article.image}
                                </div>
                            </Item>
                        </Grid>
                    ))}
                </Grid>

              
            </Box>

        </div>
    );
=======
                {isLoading && ( 
                    <div>
                        Loading...
                    </div>
                )}

                {error && ( 
                    <div className="error-message">
                        {error}
                    </div>
                )}
            
        <div>
            <table>
                    <thead>
                        <tr>
                            <th>
                                # 
                            </th>
                            <th>
                                Image
                            </th>
                            <th>
                                Titre
                            </th>
                            <th>
                                Date de création
                            </th>
                            <th>
                                Date de modification
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {articlesList && articlesList.map((article, index) =>(
                        true && <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                    
                                    <Avatar
                                    alt={article.title}
                                    src={article.image_source_url}
                                    sx={{ width: 200, height: 200 }}
                                    />
                                        
                                    </td>
                                    <td>{article.title}</td>
                                    <td>{article.created_at}</td>
                                    <td>{article.updated_at}</td>
                            </tr>
              
                    ))}
                        
                    </tbody>
                </table>
        </div>
                
          
          
            
        </Box>
     );
>>>>>>> 4e6d7dd365365e46ed36e9825b3c39fc777b5593
}

export default ArticleList;