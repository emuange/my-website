import Card from "../ui/Card";
import articles from "../../data/articles";

export default function FeaturedArticle() {
  const article = articles.find((item) => item.featured);

  if (!article) return null;

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Featured writing</p>

        <Card
          eyebrow={article.category}
          title={article.title}
          text={article.description}
          href={`/writing/${article.slug}`}
        />
      </div>
    </section>
  );
}