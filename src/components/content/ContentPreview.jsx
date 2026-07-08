import "./ContentPreview.css";
import Card from "../ui/Card";
import articles from "../../data/articles";

export default function ContentCard() {
     const article = articles.find((item) => item.featured);

    if (!article) return null;

    return (
    <section className="section">
        <div className="container">
            <p className="eyebrow">Content</p>

            <Card
                eyebrow={article.category}
                title={article.title}
                text={article.body}
                href={`/writing/${article.slug}`}
            />
        </div>
    </section>
    );
}