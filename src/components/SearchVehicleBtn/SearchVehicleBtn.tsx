import css from "./SearchVehicleBtn.module.css";
import { selectFilters, selectLimit } from "../../redux/selectors.ts";
import { getVehicles } from "../../redux/operation.ts";
import { useDispatch, useSelector } from "react-redux";
import { createQueryString } from "../../utils/createQueryString.ts";
import { selectPage } from "../../redux/selectors.ts";
import { AppDispatch } from "../../redux/store.ts";

const SearchVehicleBtn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const handleSearch = (): void => {
    const query = createQueryString(filters, page, limit);
    dispatch(getVehicles({ query }));
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
