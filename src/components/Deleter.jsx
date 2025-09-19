import { useState } from "react";
import { Link } from "react-router-dom";
import deleterequest from "../../utils/deleterequest";

function Deleter({ comment_id, setComments, comment_author, currentUser, articleId }) {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  function handleClick(event) {
    event.preventDefault();
    setMessage("Deleting comment...");
    deleterequest(comment_id)
      .then(() => {
        setComments((curr) =>
          curr.filter((comment) => comment.comment_id !== comment_id)
        );
        setMessage("Comment deleted");
        setTimeout(() => setMessage(null), 1000);
      })
      .catch(() => {
        setMessage(null);
        setError("Failed to delete comment");
        setTimeout(() => setError(null), 5000);
      });
  }

  if (!currentUser) {
   
    return (
      <div className="login-prompt">
        <p>
          Sign in to delete your comments!{" "}
          <Link to={`/users?redirect=/articles/${articleId}/comments`}>
            Sign in here
          </Link>
        </p>
      </div>
    );
  }

  if (comment_author === currentUser.username) {
    return (
      <div>
        <button className="delete-button" onClick={handleClick}>
          Delete your comment
        </button>
        <div className="messages">
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
        </div>
      </div>
    );
  }

  return null;
}

export default Deleter;
