import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleByIdCard from "./ArticleByIdCard";
import CommentsByArticleId from "./CommentsByArticleId";

function ArticleById() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true); 
    fetch(`https://northcoders-news-backend-1.onrender.com/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.article);
        setLoading(false);  
      })
      .catch(() => {
        setLoading(false); 
      });
  }, [id]);

   if (loading) {
    return <p className="loader">Loading article...</p>; 
  }

  return (
  <div>
    <ArticleByIdCard article={article} />
    <div className="link-container">
      <Link to={`/articles/${article.article_id}/comments`}>View Comments</Link>
    </div>
  </div>
);
}

export default ArticleById;
