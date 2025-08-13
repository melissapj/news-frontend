import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function ArticlesProvider() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://northcoders-news-backend-1.onrender.com/api/articles`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loader">Loading articles...</p>;
  }

  return (
    <div className="articles-container">
      {articles.map((article) => {
        return (
          <div key={article.article_id}>
            <ArticleCard article={article} />
            <div className="link-container">
              <Link to={`/articles/${article.article_id}`}>
                Show more information for this article
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArticlesProvider;
