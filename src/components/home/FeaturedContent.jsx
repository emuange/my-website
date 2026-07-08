import "./FeaturedContent.css";

import content from "../../content/content";

import ContentPreview from "../content/ContentPreview";

export default function FeaturedContent() {
  const featuredContent = content.filter((item) => item.featured);

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">From the desk</p>

        <div className="featured-content">
          {featuredContent.map((item) => (
            <ContentPreview key={item.id} content={item} />
          ))}
          
        </div>
      </div>
    </section>
  );
}