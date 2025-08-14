import SortingQueries from "./SortingQueries";
import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function List() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortby = searchParams.get("sortby") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    fetch(
      `https://northcoders-news-backend-1.onrender.com/api/articles/?sort_by=${sortby}&order=${order}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [sortby, order]);

  return (
    <div>
      <SortingQueries />
      {articles.map((article) => (
        <div key={article.article_id}>
          <ArticleCard article={article} />
          <Link to={`/articles/${article.article_id}/comments`}>
            View Comments for this article
          </Link>
        </div>
      ))}
    </div>
  );
}

export default List;
