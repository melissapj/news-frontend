import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticlesByTopic from "./ArticlesByTopic";

function AllTopics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://northcoders-news-backend-1.onrender.com/api/topics")
      .then((response) => response.json())
      .then((data) => {
        setTopics(data.topics);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="loader">Loading topics...</p>;
  }

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
