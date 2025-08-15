import { useState } from "react";
import postComment from "../../utils/postrequest";

function Adder({ setComments, article_id }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setError(null);

    const newComment = { username, body };

    postComment(article_id, newComment)
      .then((returnedComment) => {
        setComments((currentComments) => [
          returnedComment.comment,
          ...currentComments,
        ]);
        setMessage("You have added a comment!");
        setUsername("");
        setBody("");
        setTimeout(() => setMessage(null), 5000);
      })
      .catch(() => {
        setError("Failed to post comment");
        setTimeout(() => setError(null), 5000);
      });
  }

  
  return (
    <div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <h3>Add your own comment for this article</h3>
        <p>
          <label htmlFor="username">Username:</label>
        </p>

        <p>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="body">Comment:</label>
        </p>

        <p>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </p>

        <button type="submit" className="submit-button">Add your Comment!</button>
      </form>
      <div className="messages">
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Adder;
