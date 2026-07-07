import "./ContentCard.css";

export default function ContentCard() {
    return (
    <div className="card-container">
        <img src="https://picsum.photos/seed/picsum/300/200" alt="Card Image" className="card-img"/>
        <h2 className="card-title">Card Title</h2>
        <p className="card-description"> This will be the card description where we will add some description of the content</p>
        <a href="" className="card-btn">Read more</a>
    </div>)
    ;
};