import css from "./CampersPage.module.css";
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import LocationFilter from "../../components/LocationFilter/LocationFilter";
import TypeFilter from "../../components/TypeFilter/TypeFilter";
import FilterSearch from "../../components/FilterSearch/FilterSearch";

const CampersPage = () => {
  return (
    <div className={css.filtersWrapper}>
      <LocationFilter />
      <p className={css.filtersHeading}>Filters</p>
      <div className={css.equipmentAndFypeFilterWrapper}>
        <EquipmentFilter />
        <TypeFilter />
      </div>
      <FilterSearch />
    </div>
  );
};

export default CampersPage;
