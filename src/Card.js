import "./Card.css";

function Card({ content, id, isActive, isValid, onClick }) {
  return (
    <div
      id={id}
      className={`card ${isActive ? "card--active" : ""}`}
      onClick={onClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front"></div>
        <div
          className={`flip-card-back ${
            isValid ? "flip-card-back--valid" : ""
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default Card;
