import useFetchData from "../../../utility/useFecthData";
import {Link} from "react-router-dom"
import { Box, Avatar, LinearProgress } from "@mui/material";

const ArticleList = () => {
    let {data: articles, isLoading, error} = useFetchData("articles");
    let articlesList = articles?.data?.data

    const updateArcticle = (id) => {
        alert(id)
    }
    

    return ( 
        <Box

        sx={{
            width: "90%",
            margin: "auto",
            
          }}
        
        >        
            <h1>
                Liste des articles
            </h1>
            <Link to="/admin-article-add">
                <p>
                Ajouter un Article
                </p>
            </Link>
                {isLoading && ( 
                   <LinearProgress />
                )}

                {error && ( 
                    <div className="error-message">
                        {error}
                    </div>
                )}
            
        <div>
            <table className="table table-striped">
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
                            <th>
                                Action
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
                                    sx={{ width: 100, height: 100 }}
                                    />
                                        
                                    </td>
                                    <td>{article.title}</td>
                                    <td>{article.created_at}</td>
                            <td>{article.updated_at}</td>
                            <td>
                                <button onChange={(e) => updateArcticle(article.id)}>
                                    Modifier
                                </button>
                            </td>
                            </tr>
              
                    ))}
                        
                    </tbody>
                </table>
        </div>  
        </Box>
     );
}
 
export default ArticleList;