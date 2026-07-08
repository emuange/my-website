import { useParams } from "react-router-dom";
import articles from "../data/articles";

export default function Article() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <> 
        <h1>{article.title}</h1>

        <p>{article.description}</p>

        <p>{article.body}</p>
    </>
    );
}