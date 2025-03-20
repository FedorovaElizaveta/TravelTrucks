import css from "./CampersDetailsFeatures.module.css";
import { useSelector } from "react-redux";
import { selectActiveVehicle } from "../../redux/selectors.ts";
import getEquipment from "../../utils/getEquipment.tsx";

const CampersDetailsFeatures = () => {
  const vehicle = useSelector(selectActiveVehicle);
  const features = getEquipment(vehicle);

  return (
    <div className={css.ampersDetailsFeaturesWrapper}>
      <ul className={css.featuresList}>
        {features.map((feature, index) => {
          return (
            <li key={index} className={css.featuresListItem}>
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
            <td className={css.tableData}>
              {vehicle.form.replace(/^\w/, (c) => c.toUpperCase())}
            </td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Length</th>
            <td className={css.tableData}>{vehicle.length}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Width</th>
            <td className={css.tableData}>{vehicle.width}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Height</th>
            <td className={css.tableData}>{vehicle.height}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Tank</th>
            <td className={css.tableData}>{vehicle.tank}</td>
          </tr>
          <tr className={css.detailsTableRow}>
            <th className={css.tableHeader}>Consumption</th>
            <td className={css.tableData}>{vehicle.consumption}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CampersDetailsFeatures;
