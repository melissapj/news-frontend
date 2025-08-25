import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function AllTopics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://northcoders-news-backend-1.onrender.com/api/topics")
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
        setTopics(data.topics);
        setLoading(false);
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
      <h2 className="header">All Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`} className="link-container">
              Click here for {topic.slug} articles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTopics;
