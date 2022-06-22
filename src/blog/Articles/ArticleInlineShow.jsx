import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";

const ArticleInlineShow = () => {
    let { data: articles } = useFetchDataWithPagination("articles");
    
    let articlesList = articles?.data?.data

    return (<div id="informations">
        {articlesList && articlesList.map(article => {
            return <div key={article.id} className="row mb-1">
                <div className="col-md-3">
                    <img src={article.image_source_url} alt={article.title}  className="img-responsive img-fluid"/>
                </div>
                <div className="col-md-9">
                <h6>{article.title}</h6>
                    <p style={{ textAlign: 'justify' }}>{article.image_caption}</p>
                    <div style={{ textAlign: "right"}}>
                        <a href={`/detail/${article.id}`} className="btn btn-link">Lire plus</a>
                    </div>
                </div>
            </div>

        })}
    </div>);
}
 
export default ArticleInlineShow;