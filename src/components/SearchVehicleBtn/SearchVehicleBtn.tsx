import css from "./SearchVehicleBtn.module.css";
import { selectFilters } from "../../redux/selectors.js";
import { getVehicles } from "../../redux/operation.js";
import { useDispatch, useSelector } from "react-redux";
import { createQueryString } from "../../utils/createQueryString.js";
import { selectPage } from "../../redux/selectors.js";

const SearchVehicleBtn = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);

  const handleSearch = () => {
    const query = createQueryString(page, filters);

    dispatch(getVehicles(query));
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
