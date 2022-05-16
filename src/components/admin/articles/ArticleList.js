import useFetchData from "../../../utility/useFecthData";
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
            <h1>
                Liste des articles
            </h1>
            <Link to="/admin-article-add">
                <p>
                    Ajouter un Article
                </p>
            </Link>
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
}

export default ArticleList;