import { useParams } from "react-router-dom";
import articles from "../data/articles";
import ArticleHeader from "../components/article/ArticleHeader";
import ArticleBody from "../components/article/ArticleBody";
import ArticleFooter from "../components/article/ArticleFooter";
import Footer from "../components/Footer/Footer";

export default function Article() {
  const { slug } = useParams();
  const article = articles.find(article => article.slug === slug);

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <> 
        <ArticleHeader article={article} />

        <ArticleBody article={article} />

        <ArticleFooter article={article} />

        <Footer />
    </>
    );
}