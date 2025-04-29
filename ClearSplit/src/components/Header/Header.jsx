import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.jpg";

function Header() {
    return (
    <header className="header__container">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="header__logo"/>
      </NavLink>
    </header>
);
}

export default Header;