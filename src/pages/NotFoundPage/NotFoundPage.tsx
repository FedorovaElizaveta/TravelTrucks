import css from "./NotFoundPage.module.css";
import errorImage from "../../images/404Error.png";
import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";

const NotFoundPage = () => {
  return (
    <div className={css.pageWrapper}>
      <p className={css.text}>Oops!</p>

      <img src={errorImage} alt="404 error" width="600" className={css.image} />

      <p className={css.errorDescription}>
        <span className={css.errorSpan}>error</span> the requested page does not
        exist
      </p>

      <div className={css.navigationWrapper}>
        <Link to="/" className={css.goHomeLink}>
          Go Home
        </Link>
        <BackButton page={"NotFoundPage"} />
      </div>
    </div>
  );
};

export default NotFoundPage;
