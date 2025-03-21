import clsx from "clsx";
import css from "./BackButton.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { LocationState } from "../../types/location";

interface BackButtonProps {
  page: "CampersDetailsPage" | "NotFoundPage";
}

const BackButton: React.FC<BackButtonProps> = ({ page }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const handleGoBack = () => {
    const from = state?.from || "/campers";
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
