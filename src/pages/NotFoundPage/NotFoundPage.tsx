import css from "./NotFoundPage.module.css";
import errorImage from "../../images/404Error.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={css.pageWrapper}>
      <p className={css.text}>Oops!</p>
      <img src={errorImage} alt="404 error" width="600" className={css.image} />
      <p className={css.errorDescription}>
        <span className={css.errorSpan}>error</span> the requested page does not
        exist
      </p>
      <Link to="/" className={css.goHomeLink}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
