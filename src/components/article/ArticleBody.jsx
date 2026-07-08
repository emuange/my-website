import "./ArticleBody.css";

export default function ArticleBody({ article }) {
  return (
    <section className="article-body section">
      <div className="container">

        <div className="reading-width">

          <p>{article.body}</p>

        </div>

      </div>
    </section>
  );
}