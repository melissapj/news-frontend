import SortingQueries from "./SortingQueries";
import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import AllTopics from "./AllTopics";
import GetAllUsers from "./GetAllUsers";

function List() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sortby = searchParams.get("sortby") || "created_at";
    const order = searchParams.get("order") || "desc";

    setLoading(true);
    fetch(
      `https://northcoders-news-backend-1.onrender.com/api/articles/?sort_by=${sortby}&order=${order}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [searchParams]);

  if (loading) {
    return <p className="loader">Loading articles...</p>;
  }

return (
  <div>
    <AllTopics />
    <div className="link-container">
      <Link to="/users">All Users</Link>

    <SortingQueries
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />

    <div className="articles-container">
      {articles.map((article) => (
        <div key={article.article_id}>
          <ArticleCard article={article} />
          <div className="link-container">
            <Link to={`/articles/${article.article_id}`}>
              Show more information for this article
            </Link>
            
          </div>
        </div>
      ))}
    </div>
     </div>
  </div>
);
}

export default List;
