import css from "./SearchVehicleBtn.module.css";
import {
  selectFilters,
  selectLimit,
  selectPage,
} from "../../redux/selectors.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store.ts";
import { createQueryString } from "../../utils/createQueryString.ts";
import { getFilteredVehicles } from "../../redux/operation.ts";
import { clearVehicles, resetPage } from "../../redux/slice.ts";

const SearchVehicleBtn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const filters = useSelector(selectFilters);

  const handleSearch = (): void => {
    dispatch(resetPage());

    if (page === 1) {
      dispatch(clearVehicles());
    }

    const query = createQueryString(filters, page, limit);
    dispatch(getFilteredVehicles({ query }));
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
