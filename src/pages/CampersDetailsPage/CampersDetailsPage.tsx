import css from "./CampersDetailsPage.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import CampersDetails from "../../components/CampersDetails/CampersDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicles } from "../../redux/selectors.js";
import { manageActiveVehicle } from "../../redux/slice.js";
import BackButton from "../../components/BackButton/BackButton.js";
import { useEffect } from "react";
import { selectActiveVehicle } from "../../redux/selectors.js";
import clsx from "clsx";

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

      <div className={css.detailsNavigationWrapper}>
        <ul className={css.detailsNavigationList}>
          <li className={css.detailsNavigationListItem}>
            <NavLink
              to="features"
              className={({ isActive }) =>
                clsx(css.navigationLink, isActive && css.activeNavigationLink)
              }
            >
              Features
            </NavLink>
          </li>
          <li className={css.detailsNavigationListItem}>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                clsx(css.navigationLink, isActive && css.activeNavigationLink)
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};

export default CampersDetailsPage;
