import star from "../images/star.png";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="open-spots">SOLD OUT</div>}
      <img src={`../../images/${props.coverImg}`} alt="" />
      <p><img src={star} alt="" /> {props.stats.rating} <span className="grey">({props.stats.reviewCount}) &#8226; {props.location}</span></p>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}