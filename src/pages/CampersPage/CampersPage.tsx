import css from "./CampersPage.module.css";
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import LocationFilter from "../../components/LocationFilter/LocationFilter";

const CampersPage = () => {
  return (
    <div className={css.filtersWrapper}>
      <LocationFilter />
      <p className={css.filtersHeading}>Filters</p>
      <EquipmentFilter />
    </div>
  );
};

export default CampersPage;
