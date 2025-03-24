import css from "./VehicleList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilters,
  selectLimit,
  selectPage,
  selectVehicles,
} from "../../redux/selectors.ts";
import VehicleCard from "../VehicleCard/VehicleCard.tsx";
import LoadMore from "../LoadMore/LoadMore.tsx";
import { useEffect } from "react";
import { createQueryString } from "../../utils/createQueryString.ts";
import { getVehicles } from "../../redux/operation.ts";
import { AppDispatch } from "../../redux/store.ts";

const VehicleList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const vehicles = useSelector(selectVehicles);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    const query = createQueryString(filters, page, limit);
    dispatch(getVehicles({ query }));
  }, [dispatch, filters, page, limit]);

  return (
    <div className={css.vehicleListWrapper}>
      <ul className={css.vehicleList}>
        {vehicles.map((vehicle, index) => (
          <li
            className={css.vehicleListItem}
            key={`${vehicle.name}-${vehicle.id}-${index}-${Math.random()
              .toString(36)
              .substr(2, 5)}`}
          >
            <VehicleCard vehicle={vehicle} />
          </li>
        ))}
      </ul>
      <LoadMore />
    </div>
  );
};

export default VehicleList;
