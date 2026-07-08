import "./ArticleHeader.css";

export default function ArticleHeader({ article }) {
  return (
    <header className="article-header section">
        <div className="container">

            <p className="eyebrow">{article.category}</p>

            <h1>{article.title}</h1>

            <p className="lede">{article.description}</p>

            <p className="article-date">{article.published}</p>

        </div>
    </header>
  );
}