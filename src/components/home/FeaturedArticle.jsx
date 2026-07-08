import articles from "../../data/articles";
import ContentPreview from "../content/ContentPreview";

export default function FeaturedArticle() {
  const article = articles.find((item) => item.featured);

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Featured writing</p>
        <ContentPreview content={article} />
      </div>
    </section>
  );
}