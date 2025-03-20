import { useDispatch } from "react-redux";
import css from "./LocationFilter.module.css";
import { BsMap } from "react-icons/bs";
import { setLocationFilter } from "../../redux/slice.ts";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../redux/store.ts";

const LocationFilter = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setLocationFilter(inputValue));
  }, [dispatch, inputValue]);

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
        <BsMap size={20} className={css.mapIcon} />
      </div>
    </div>
  );
};

export default LocationFilter;
