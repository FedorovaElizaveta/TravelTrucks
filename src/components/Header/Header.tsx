import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={css.header}>
      <a href="/" className={css.logo}>
        Travel<span className={css.logoSpan}>Trucks</span>
      </a>
      <nav>
        <ul className={css.navigationList}>
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
