import css from "./TypeFilter.module.css";

const TypeFilter = () => {
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
          />
          <label htmlFor="van" className={css.typeLabel}>
            <svg width="32" height="32" className={css.typeIcon}>
              <use href="/symbol-defs.svg#icon-van"></use>
            </svg>

            <span className={css.typeLabelName}>Van</span>
          </label>
        </li>
        <li className={css.typeListItem}>
          <input
            type="checkbox"
            id="fullyIntegrated"
            name="fullyIntegrated"
            className={css.typeCheckbox}
          />
          <label htmlFor="fullyIntegrated" className={css.typeLabel}>
            <svg width="28" height="28" className={css.typeIcon}>
              <use href="/symbol-defs.svg#icon-fullyIntegrated"></use>
            </svg>

            <span className={css.typeLabelName}>Fully Integrated</span>
          </label>
        </li>
        <li className={css.typeListItem}>
          <input
            type="checkbox"
            id="alcove"
            name="alcove"
            className={css.typeCheckbox}
          />
          <label htmlFor="alcove" className={css.typeLabel}>
            <svg width="28" height="28" className={css.typeIcon}>
              <use href="/symbol-defs.svg#icon-alcove"></use>
            </svg>

            <span className={css.typeLabelName}>Alcove</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default TypeFilter;
