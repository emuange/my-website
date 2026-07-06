import "./MissionCard.css";
import { site } from "../../data/site";

export default function MissionCard() {
    return (
        <section className="mission section">
            <div className="container mission-grid">
                <div>
                    <p className="eyebrow">Emmanuel's Study</p>
                    <h1>{site.title}</h1>

                    <p className="lede">
                        I explore technology, Kenya, photography, data, maps, and the small observations
                        that make the world more interesting.
                    </p>
                </div>

                <aside className="mission-note">
                    <p className="eyebrow">Currently exploring</p>

                    <ul>
                        {site.currentlyExploring.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </aside>
            </div>
        </section>
    );
}