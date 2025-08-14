import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard'
import { Link } from "react-router-dom";

function ArticlesByTopic() {
  const { slug } = useParams();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    fetch("https://northcoders-news-backend-1.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
        const filteredArticles = data.articles.filter(
        (article) => article.topic === slug 
      );
      setArticles(filteredArticles)
    })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="loader">Loading topics...</p>;
  }

  return (
  <div>
    <div className="link-container">
      <Link to="/">← Back to all articles</Link>

    {articles.map((article) => (
      <div key={article.article_id}>
        <ArticleCard article={article} />
        <Link to={`/articles/${article.article_id}/comments`}>
          View Comments for this article
        </Link>
      </div>
    ))}
  </div>
   </div>
);
}
export default ArticlesByTopic