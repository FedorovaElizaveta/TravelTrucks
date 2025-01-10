import css from "./CampersPage.module.css";
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import LocationFilter from "../../components/LocationFilter/LocationFilter";
import TypeFilter from "../../components/TypeFilter/TypeFilter";

const CampersPage = () => {
  return (
    <div className={css.filtersWrapper}>
      <LocationFilter />
      <p className={css.filtersHeading}>Filters</p>
      <div className={css.equipmentAndFypeFilterWrapper}>
        <EquipmentFilter />
        <TypeFilter />
      </div>
    </div>
  );
};

export default CampersPage;
