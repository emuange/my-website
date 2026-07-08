import { Link } from "react-router-dom";
import "./ContentPreview.css";

export default function ContentPreview({ content }) {
  if (!content) return null;

  return (
    <article className="content-preview">
      <p className="eyebrow">{content.category}</p>
      <h3>{content.title}</h3>

      {content.description && <p>{content.description}</p>}

      <Link
          to={`/writing/${content.slug}`} > Read article →
      </Link>

    </article>
  );
}