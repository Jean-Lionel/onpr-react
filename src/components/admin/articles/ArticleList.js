import useFetchData from "../../../utility/useFecthData";
import {Link} from "react-router-dom"

const ArticleList = () => {
    let {data: articles, isLoading, error} = useFetchData("articles");
         let articlesList = articles?.data?.data
    return ( 
        <div>
        
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
            <ul>
            {articlesList && articlesList.map((article, index) =>(
                <li key={index} className="article-item">
                    <div>
                    <dl>
                        <dt>Title</dt>
                        <dd>{article.title}</dd>
                    </dl>
                    <dl>
                        <dt>Détail</dt>
                        <dd>
                            {article.body}
                        </dd>
                    </dl>
                       
                    </div>
                </li>
            ))}
            </ul>
            
        </div>
     );
}
 
export default ArticleList;