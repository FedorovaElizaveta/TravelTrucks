import css from "./CampersDetailsPage.module.css";
import {
  Navigate,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import CampersDetails from "../../components/CampersDetails/CampersDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicles } from "../../redux/selectors.ts";
import { manageActiveVehicle } from "../../redux/slice.ts";
import BackButton from "../../components/BackButton/BackButton.tsx";
import { useEffect, useRef } from "react";
import { selectActiveVehicle } from "../../redux/selectors.ts";
import clsx from "clsx";
import BookingForm from "../../components/BookingForm/BookingForm.tsx";
import { AppDispatch } from "../../redux/store.ts";
import { LocationState } from "../../types/location.ts";

const CampersDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const vehicles = useSelector(selectVehicles);
  const activeVehicle = useSelector(selectActiveVehicle);

  useEffect(() => {
    if (!id) return;

    const vehicle = vehicles.find((vehicle) => vehicle.id === id);

    if (vehicle) dispatch(manageActiveVehicle(vehicle));
  }, [dispatch, id, vehicles]);

  const location = useLocation();
  const state = location.state as LocationState | null;
  const backLocationRef = useRef(state?.from || "/campers");

  if (location.pathname.endsWith(`/campers/${id}`)) {
    return <Navigate to="features" replace />;
  }

  return (
    <div className={css.campersDetailsPageWrapper}>
      <BackButton page={"CampersDetailsPage"} />
      {activeVehicle && <CampersDetails />}

      <div className={css.detailsNavigationWrapper}>
        <ul className={css.detailsNavigationList}>
          <li className={css.detailsNavigationListItem}>
            <NavLink
              to="features"
              state={{ from: backLocationRef.current }}
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
              state={{ from: backLocationRef.current }}
              className={({ isActive }) =>
                clsx(css.navigationLink, isActive && css.activeNavigationLink)
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <div className={css.additionalInfoAndFormWrapper}>
          <Outlet />
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CampersDetailsPage;
