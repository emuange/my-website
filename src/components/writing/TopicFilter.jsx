import "./TopicFilter.css";
const topics = ["Kenya", "Technology", "Photography", "Data", "Maps", "Design", "Life"];

export default function TopicFilter() {
    

  return (
    <section className="topic-filter section">
        <div className="container">

          <p className="eyebrow">
            Explore by Topic
          </p>
          
          <div className="topic-filter">
            {topics.map((topic) => (
                <button key={topic}>
                    {topic}
                </button>
            ))}
          </div>
        </div>
    </section>
  );
}