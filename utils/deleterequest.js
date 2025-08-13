const deleteComment = async (comment_id) => {
  const res = await fetch(
    `https://northcoders-news-backend-1.onrender.com/api/comments/${comment_id}`,
    { method: "DELETE" }
  );

  if (!res.ok) {
    throw new Error("Failed to delete comment");
  }
  try {
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
};

export default deleteComment;
