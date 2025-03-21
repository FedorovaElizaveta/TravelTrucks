import css from "./CampersDetailsFeatures.module.css";
import { useSelector } from "react-redux";
import { selectActiveVehicle } from "../../redux/selectors.ts";
import getEquipment from "../../utils/getEquipment.tsx";
import { capitalizeFirstLetter } from "../../utils/capitalize.ts";

const CampersDetailsFeatures = () => {
  const vehicle = useSelector(selectActiveVehicle);

  if (!vehicle) return <p className={css.noFeaturesMessage}>No features...</p>;

  const features = getEquipment(vehicle, 20);

  const { form, length, width, height, tank, consumption } = vehicle;

  return (
    <div className={css.ampersDetailsFeaturesWrapper}>
      <ul className={css.featuresList}>
        {features.map((feature) => {
          return (
            <li key={feature.name} className={css.featuresListItem}>
              {feature.icon}
              <span>{feature.name}</span>
            </li>
          );
        })}
      </ul>
      <p className={css.vehicleDetailsHeading}>Vehicle details</p>

      <table className={css.detailsTable}>
        <tbody>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Form</th>
            <td className={css.tableData}>{capitalizeFirstLetter(form)}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Length</th>
            <td className={css.tableData}>{length}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Width</th>
            <td className={css.tableData}>{width}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Height</th>
            <td className={css.tableData}>{height}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Tank</th>
            <td className={css.tableData}>{tank}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Consumption</th>
            <td className={css.tableData}>{consumption}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CampersDetailsFeatures;
