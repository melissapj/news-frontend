import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleByIdCard from "./ArticleByIdCard";
import ErrorPage from "./ErrorPage";

function ArticleById() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://northcoders-news-backend-1.onrender.com/api/articles/${id}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404)
            throw new Error(
              "Article not found. Check the URL or go back to the homepage."
            );
          throw new Error("Something went wrong. Please try again later.");
        }
        return res.json();
      })
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loader">Loading article...</p>;
  if (error) return <ErrorPage message={error} />;

  return (
    <div>
      <div className="link-container">
        <Link to={`/articles/${article.article_id}/comments`}>
          View Comments for this article
        </Link>
        <div className="link">
          <Link to="/">⬅ Back to Articles</Link>
        </div>
      </div>
      <ArticleByIdCard article={article} />
    </div>
  );
}

export default ArticleById;
