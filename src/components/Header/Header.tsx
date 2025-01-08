import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  return (
    <header>
      <a href="/">
        Travel<span>Trucks</span>
      </a>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/campers"
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
