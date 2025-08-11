function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>By: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <p>
        Published Date:{" "}
        {new Date(article.created_at).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {article.article_img_url && (
        <img
          src={article.article_img_url}
          alt={`Image for article: ${article.title}`}
          className="article-image"
        />
      )}
    </div>
  );
}

export default ArticleCard;