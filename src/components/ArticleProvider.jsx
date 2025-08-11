import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard'

function ArticlesProvider() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://northcoders-news-backend-1.onrender.com/api/articles`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <div className="articles-container">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export default ArticlesProvider;
