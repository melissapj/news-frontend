function postComment(article_id, NewComment) {
   return fetch(`https://northcoders-news-backend-1.onrender.com/api/articles/${article_id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // important!
    },
    body: JSON.stringify(NewComment), // must stringify
  })
  .then(res => res.json());
}

export default postComment;