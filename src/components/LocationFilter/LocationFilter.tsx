import { useDispatch, useSelector } from "react-redux";
import css from "./LocationFilter.module.css";
import { setLocationFilter } from "../../redux/slice.ts";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../redux/store.ts";
import { Icons } from "../../icons/icons.tsx";
import { selectFilters } from "../../redux/selectors.ts";

const LocationFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState("");
  const filters = useSelector(selectFilters);
  const location = filters.location;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setLocationFilter(inputValue));
  }, [dispatch, inputValue]);

  useEffect(() => {
    setInputValue(location);
  }, [location]);

  return (
    <div className={css.locationWrapper}>
      <label htmlFor="location" className={css.locationLabel}>
        Location
      </label>
      <div className={css.inputWrapper}>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="City"
          className={css.locationInput}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Icons.map size={20} className={css.mapIcon} />
      </div>
    </div>
  );
};

export default LocationFilter;
