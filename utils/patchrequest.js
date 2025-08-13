const patchVotes = async (articleId, incVotes) => {
  const res = await fetch(
    `https://northcoders-news-backend-1.onrender.com/api/articles/${articleId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inc_votes: incVotes }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update votes");
  }

  const data = await res.json();
  return data.article;
};

export default patchVotes;