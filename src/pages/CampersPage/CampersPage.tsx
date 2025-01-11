import FiltersSection from "../../components/FiltersSection/FiltersSection";
import VehicleList from "../../components/VehicleList/VehicleList";
import css from "./CampersPage.module.css";

const CampersPage = () => {
  return (
    <div className={css.campersPageWrapper}>
      <FiltersSection />
      <VehicleList />
    </div>
  );
};

export default CampersPage;
