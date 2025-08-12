function CommentsByArticleIdCard({ comment }) {
  return (
      <div className="Comments-by-id">
        <p>Comment: {comment.body}</p>
        <p>— by {comment.author}</p>
        <p>
          Published Date:{" "}
          {new Date(comment.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>Votes: {comment.votes}</p>
      </div>
  );
}

export default CommentsByArticleIdCard
