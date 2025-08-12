import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsByArticleIdCard from "./CommentsByArticleIdCard";

function CommentsByArticleId() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://northcoders-news-backend-1.onrender.com/api/articles/${id}/comments`)
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
    {comments.map((comment) => {
      return (
        <div key={comment.comment_id}>
          <CommentsByArticleIdCard comment={comment} />
        </div>
      );
    })}
  </div>
);
}

export default CommentsByArticleId;
