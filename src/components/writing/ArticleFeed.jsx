import articles from "../../data/articles";
import ContentPreview from "../content/ContentPreview";

export default function ArticleFeed() {
  return (
    <section className="article-feed section">
      <div className="container">

        <p className="eyebrow">
            Latest Writing
        </p>

        {articles.map((article) => (
          <ContentPreview key={article.id} content={article} />
        ))}
      </div>
    </section>
  );
}