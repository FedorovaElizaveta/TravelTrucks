import css from "./LocationFilter.module.css";
import { BsMap } from "react-icons/bs";

const LocationFilter = () => {
  return (
    <div className={css.locationWrapper}>
      <label htmlFor="location" className={css.locationLabel}>
        Location
      </label>
      <div className={css.inputWrapper}>
        <BsMap size={20} className={css.mapIcon} />
        <input
          type="text"
          name="location"
          id="location"
          className={css.locationInput}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
