import { useState } from "react";
import deleterequest from "../../utils/deleterequest";

function Deleter({ comment_id, setComments, comment_author }) {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  function handleClick(event) {
    event.preventDefault();
    setMessage("Comment deleting..");
    deleterequest(comment_id)
      .then(() => {
        setComments((curr) =>
          curr.filter((comment) => comment.comment_id !== comment_id)
        );
        setMessage("Comment deleted");
        setTimeout(() => setMessage(null), 5000);
      })
      .catch(() => {
        setMessage(null)
        setError("Failed to delete comment");
        setTimeout(() => setError(null), 5000);
      });
  }
 return (
  <>
    {comment_author === "jessjelly" && (
      <>
        <div>
          <button className="delete-button" onClick={handleClick}>
            Delete your comment
          </button>
        </div>
        <div className="messages">
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
      </>
    )}
  </>
);
}

export default Deleter;
