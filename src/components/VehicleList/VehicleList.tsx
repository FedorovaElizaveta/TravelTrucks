import css from "./VehicleList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicles } from "../../redux/selectors.js";
import { getVehicles } from "../../redux/operation.js";
import VehicleCard from "../VehicleCard/VehicleCard.tsx";
import { useEffect } from "react";

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
