import "./Card.css";

export default function Card({ eyebrow, title, text, href }) {
  return (
    <article className="card">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3>{title}</h3>
      <p>{text}</p>
      {href && <a href={href}>Read more →</a>}
    </article>
  );
}