import "./Hero.css";
import heroImage from "../images/photo-grid.png";

export const Hero = () => {
  return (
    <section className="hero">
      <img className="photo-grid" src={heroImage} alt="photo grid" />
      <h1 className="heading">Online Experiences</h1>
      <p className="paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  );
}