import css from "./SearchVehicleBtn.module.css";
import { selectFilters } from "../../redux/selectors.js";
import { getVehicles } from "../../redux/operation.js";
import { useDispatch, useSelector } from "react-redux";

const SearchVehicleBtn = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const getQuery = () => {
    const searchParams = new URLSearchParams();
    if (filters.location) searchParams.append("location", filters.location);

    if (filters.equipment.length !== 0)
      filters.equipment.map((feature) => searchParams.append(feature, "true"));

    if (filters.bodyType.length !== 0)
      filters.bodyType.map((type) => searchParams.append("form", type));

    const queryString = searchParams.toString();

    return queryString;
  };

  const handleSearch = () => {
    dispatch(getVehicles(getQuery()));
  };

  return (
    <div>
      <button type="button" className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchVehicleBtn;
