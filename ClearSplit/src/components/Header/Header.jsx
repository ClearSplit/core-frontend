import { NavLink } from "react-router-dom";
import "./Header.scss";


function Header() {
    return (
    <header className="header">
      <NavLink to="/" className="header__link">
        <h1 className="header__title">ClearSplit</h1>
      </NavLink>
    </header>
);
}

export default Header;