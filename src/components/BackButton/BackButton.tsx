import clsx from "clsx";
import css from "./BackButton.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton = ({ page }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    const from = location.state?.from || "/campers";
    navigate(from);
  };

  const styles = clsx(
    css.goBackBtn,
    page === "CampersDetailsPage" && css.goBackBtnCampersDetails,
    page === "NotFoundPage" && css.goBackBtnNotFound
  );

  return (
    <button type="button" onClick={handleGoBack} className={styles}>
      Go Back
    </button>
  );
};

export default BackButton;
