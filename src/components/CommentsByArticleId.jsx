import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsByArticleIdCard from "./CommentsByArticleIdCard";
import Adder from "./Adder";
import Deleter from "./Deleter";
import ErrorPage from "./ErrorPage";

function CommentsByArticleId({currentUser}) {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(
      `https://northcoders-news-backend-1.onrender.com/api/articles/${id}/comments`
    )
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404)
            throw new Error(
              "Comments not found. Check the URL or go back to the homepage."
            );
          throw new Error("Something went wrong. Please try again later.");
        }
        return res.json();
      })
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loader">Loading comments...</p>;
  if (error) return <ErrorPage message={error} />;

  return (
    <div>
      <div className="link-container">
        <div className="link">
          <Link to={`/articles/${id}`}>⬅ Back to article</Link>
          <Link to="/">⬅ Back to all articles</Link>
        </div>
      </div>

      <h2 className="header-for-comments">Comments for Article</h2>

      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <CommentsByArticleIdCard comment={comment} />
          <div className="button-wrapper">
            <Deleter
              comment_id={comment.comment_id}
              setComments={setComments}
              comment_author={comment.author}
              currentUser={currentUser}
            />
          </div>
        </div>
      ))}

      <Adder comments={comments} setComments={setComments} article_id={id} />
    </div>
  );
}

export default CommentsByArticleId;
