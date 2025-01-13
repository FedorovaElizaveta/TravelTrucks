import css from "./FiltersSection.module.css";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import SearchVehicleBtn from "../SearchVehicleBtn/SearchVehicleBtn";
import LocationFilter from "../LocationFilter/LocationFilter";
import TypeFilter from "../TypeFilter/TypeFilter";

const FiltersSection = () => {
  return (
    <div className={css.filtersWrapper}>
      <LocationFilter />
      <p className={css.filtersHeading}>Filters</p>
      <div className={css.equipmentAndFypeFilterWrapper}>
        <EquipmentFilter />
        <TypeFilter />
      </div>
      <SearchVehicleBtn />
    </div>
  );
};

export default FiltersSection;
