import { site } from "../../data/site";

export default function WritingHeader() {
  return (
    <section className="writing-header section">
      <div className="container">
        <p className="eyebrow">Emmanuel's Study</p>
        <h1>{site.title}</h1>
      </div>
    </section>
  );
}