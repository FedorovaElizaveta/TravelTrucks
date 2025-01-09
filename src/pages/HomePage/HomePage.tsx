import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css.pageWrapper}>
      <div className={css.pageText}>
        <h1 className={css.mainHeading}>Campers of your dreams</h1>
        <p className={css.subheading}>
          You can find everything you want in our catalog
        </p>
        <Link to="/campers" className={css.campersLink}>
          View Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
