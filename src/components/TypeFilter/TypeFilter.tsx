import css from "./TypeFilter.module.css";
import { useDispatch } from "react-redux";
import { toggleBodyTypeFilter } from "../../redux/slice.ts";
import { AppDispatch } from "../../redux/store.ts";
import { Icons } from "../../icons/icons.tsx";

const TypeFilter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    dispatch(toggleBodyTypeFilter(name));
  };

  return (
    <div className={css.typeFilterWrapper}>
      <h2 className={css.typeHeading}>Vehicle type</h2>
      <ul className={css.typeList}>
        <li className={css.typeListItem}>
          <input
            type="checkbox"
            id="van"
            name="van"
            className={css.typeCheckbox}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="van" className={css.typeLabel}>
            <Icons.van size={32} className={css.typeIcon} />

            <span className={css.typeLabelName}>Van</span>
          </label>
        </li>
        <li className={css.typeListItem}>
          <input
            type="checkbox"
            id="fullyIntegrated"
            name="fullyIntegrated"
            className={css.typeCheckbox}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="fullyIntegrated" className={css.typeLabel}>
            <Icons.fullyIntegrated size={28} className={css.typeIcon} />

            <span className={css.typeLabelName}>Fully Integrated</span>
          </label>
        </li>
        <li className={css.typeListItem}>
          <input
            type="checkbox"
            id="alcove"
            name="alcove"
            className={css.typeCheckbox}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="alcove" className={css.typeLabel}>
            <Icons.alcove size={28} className={css.typeIcon} />

            <span className={css.typeLabelName}>Alcove</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default TypeFilter;
