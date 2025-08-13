function postComment(article_id, NewComment) {
   return fetch(`https://northcoders-news-backend-1.onrender.com/api/articles/${article_id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(NewComment), 
  })
  .then(res => res.json());
}

export default postComment;