import FiltersSection from "../../components/FiltersSection/FiltersSection";
import css from "./CampersPage.module.css";

const CampersPage = () => {
  return (
    <div className={css.filtersWrapper}>
      <FiltersSection />
    </div>
  );
};

export default CampersPage;
