import css from "./TypeFilter.module.css";
import { FaStar } from "react-icons/fa";

const TypeFilter = () => {
  return (
    <div className={css.typeFilterWrapper}>
      <h2 className={css.typeHeading}>Vehicle type</h2>
      <ul className={css.typeList}>
        <li className={css.typeListItem}>
          <FaStar size={32} className={css.typeIcon} />
          <input
            type="checkbox"
            id="van"
            name="van"
            className={css.typeCheckbox}
          />
          <label htmlFor="van" className={css.typeLabel}>
            Van
          </label>
        </li>
        <li className={css.typeListItem}>
          <FaStar size={32} className={css.typeIcon} />
          <input
            type="checkbox"
            id="fullyIntegrated"
            name="fullyIntegrated"
            className={css.typeCheckbox}
          />
          <label htmlFor="fullyIntegrated" className={css.typeLabel}>
            Fully Integrated
          </label>
        </li>
        <li className={css.typeListItem}>
          <FaStar size={32} className={css.typeIcon} />
          <input
            type="checkbox"
            id="alcove"
            name="alcove"
            className={css.typeCheckbox}
          />
          <label htmlFor="alcove" className={css.typeLabel}>
            Alcove
          </label>
        </li>
      </ul>
    </div>
  );
};

export default TypeFilter;
