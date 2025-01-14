import css from "./CampersDetailsPage.module.css";
import { useParams } from "react-router-dom";
import CampersDetails from "../../components/CampersDetails/CampersDetails";
import { useSelector } from "react-redux";
import { selectVehicles } from "../../redux/selectors.js";

const CampersDetailsPage = () => {
  const { id } = useParams();
  const vehicles = useSelector(selectVehicles);

  const vehicle = vehicles.find((vehicle) => vehicle.id === id);

  return (
    <div className={css.campersDetailsPageWrapper}>
      <CampersDetails vehicle={vehicle} />
    </div>
  );
};

export default CampersDetailsPage;
