import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsByArticleIdCard from "./CommentsByArticleIdCard";
import Adder from "./Adder";

function CommentsByArticleId() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://northcoders-news-backend-1.onrender.com/api/articles/${id}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="loader">Loading comments...</p>;
  }

  return (
    <div className="comments-container">
      <h2 className="header-for-comments">Comments for Article</h2>
      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <CommentsByArticleIdCard comment={comment} />
        </div>
      ))}
      <Adder comments={comments} setComments={setComments} article_id={id} />
      <div className="link-container">
        <Link to={`/articles/${id}`}>⬅ Back to Article</Link>
        <br />
        <Link to="/">⬅ Back to all Articles</Link>
      </div>
    </div>
  );
}

export default CommentsByArticleId;
