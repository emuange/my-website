import articles from "../../data/articles";
import ContentPreview from "../content/ContentPreview";

import "./ArticleFeed.css";

export default function ArticleFeed() {
  return (
    <section className="section">
      <div className="container">

        <p className="eyebrow">
            Latest Writing
        </p>

        <div className="article-feed">
        {articles.map((article) => (
          <ContentPreview key={article.id} content={article} />
        ))}
        </div>
      </div>
    </section>
  );
}