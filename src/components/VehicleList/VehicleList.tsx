import css from "./VehicleList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../../redux/operation.js";
import { selectVehicles } from "../../redux/selectors.js";
import VehicleCard from "../VehicleCard/VehicleCard.tsx";

const VehicleList = () => {
  const dispatch = useDispatch();

  const vehicles = useSelector(selectVehicles);

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  return (
    <div className={css.vehicleListWrapper}>
      <ul className={css.vehicleList}>
        {vehicles.map((vehicle) => (
          <li className={css.vehicleListItem} key={vehicle.id}>
            <VehicleCard vehicle={vehicle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
