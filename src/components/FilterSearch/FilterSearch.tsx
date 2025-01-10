import css from "./FilterSearch.module.css";

const FilterSearch = () => {
  return (
    <div>
      <button type="button" className={css.searchBtn}>
        Search
      </button>
    </div>
  );
};

export default FilterSearch;
