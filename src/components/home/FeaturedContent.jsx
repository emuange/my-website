import "./FeaturedContent.css";

import articles from "../../data/articles";
import photoseries from "../../data/photoseries";
import projects from "../../data/projects";

import ContentPreview from "../content/ContentPreview";

export default function FeaturedContent() {
  const featuredArticle = articles.find((item) => item.featured);
  const featuredPhoto = photoseries.find((item) => item.featured);
  const featuredProject = projects.find((item) => item.featured);

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">From the desk</p>

        <div className="featured-content">
          <ContentPreview content={featuredArticle} />
          <ContentPreview content={featuredPhoto} />
          <ContentPreview content={featuredProject} />
        </div>
      </div>
    </section>
  );
}