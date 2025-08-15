import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard'
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function ArticlesByTopic() {
  const { slug } = useParams();
 const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://northcoders-news-backend-1.onrender.com/api/articles")
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404)
            throw new Error(
              "Topic not found. Check the URL or go back to the homepage."
            );
          throw new Error("Something went wrong. Please try again later.");
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
        const filteredArticles = data.articles.filter(
        (article) => article.topic === slug 
      );
      setArticles(filteredArticles)
    })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

   if (loading) return <p className="loader">Loading topics...</p>;
  if (error) return <ErrorPage message={error} />;

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