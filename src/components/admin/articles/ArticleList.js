import useFetchData from "../../../utility/useFecthData";

const ArticleList = () => {
    let {data: articles, isLoading, error} = useFetchData("articles");
         let articlesList = articles?.data?.data
    return ( 
        <div>
            <h1>
                Liste des articles
            </h1>
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