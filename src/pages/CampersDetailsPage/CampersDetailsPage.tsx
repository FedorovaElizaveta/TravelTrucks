import css from "./CampersDetailsPage.module.css";
import { useParams } from "react-router-dom";
import CampersDetails from "../../components/CampersDetails/CampersDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicles } from "../../redux/selectors.js";
import { manageActiveVehicle } from "../../redux/slice.js";
import BackButton from "../../components/BackButton/BackButton.js";
import { useEffect } from "react";
import { selectActiveVehicle } from "../../redux/selectors.js";

const CampersDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const vehicles = useSelector(selectVehicles);
  const vehicle = useSelector(selectActiveVehicle);

  useEffect(() => {
    const vehicle = vehicles.find((vehicle) => vehicle.id === id);
    dispatch(manageActiveVehicle(vehicle));
  }, [dispatch, id, vehicles]);

  return (
    <div className={css.campersDetailsPageWrapper}>
      <BackButton page={"CampersDetailsPage"} />
      {vehicle && <CampersDetails />}
    </div>
  );
};

export default CampersDetailsPage;
