function ArticleByIdCard({ article }) {
  if (!article) return <p>Loading...</p>;

  return (
    <div className="Article-by-id">
      <h1 className="header-for-article">{article.title}</h1>
      <div>
        <p>Article: {article.body}</p>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>
          Published Date:{" "}
          {new Date(article.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>Votes: {article.votes}</p>
        <p>Comment Count: {article.comment_count}</p>
      </div>
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

export default ArticleByIdCard;
