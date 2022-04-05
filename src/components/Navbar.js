import airbnbLogo from "../images/airbnb-logo.svg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav">
        <img className="logo" src={airbnbLogo} alt="airbnb logo" />
        airbnb
      </nav>
    </header>
  );
}