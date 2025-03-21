import css from "./EquipmentFilter.module.css";
import { useDispatch } from "react-redux";
import { toggleEquipmentFilter } from "../../redux/slice.ts";
import { AppDispatch } from "../../redux/store.ts";
import { Icons } from "../../icons/icons.tsx";

const EquipmentFilter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    dispatch(toggleEquipmentFilter(name));
  };

  return (
    <div className={css.equipmentFilterWrapper}>
      <h2 className={css.equipmentHeading}>Vehicle equipment</h2>

      <ul className={css.equipmentList}>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="AC"
            name="AC"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="AC" className={css.equipmentLabel}>
            <Icons.AC size={32} />

            <span>AC</span>
          </label>
        </li>

        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="bathroom"
            name="bathroom"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="bathroom" className={css.equipmentLabel}>
            <Icons.bathroom size={32} />

            <span>Bathroom</span>
          </label>
        </li>

        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="kitchen"
            name="kitchen"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="kitchen" className={css.equipmentLabel}>
            <Icons.kitchen size={32} />

            <span>Kitchen</span>
          </label>
        </li>

        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="TV"
            name="TV"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="TV" className={css.equipmentLabel}>
            <Icons.TV size={32} className={css.equipmentIcon} />

            <span>TV</span>
          </label>
        </li>

        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="radio"
            name="radio"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="radio" className={css.equipmentLabel}>
            <Icons.radio size={32} />

            <span>Radio</span>
          </label>
        </li>

        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="refrigerator"
            name="refrigerator"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="refrigerator" className={css.equipmentLabel}>
            <Icons.refrigerator size={32} />

            <span>Refrigerator</span>
          </label>
        </li>

        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="microwave"
            name="microwave"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="microwave" className={css.equipmentLabel}>
            <Icons.microwave size={32} />

            <span>Microwave</span>
          </label>
        </li>

        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="gas"
            name="gas"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="gas" className={css.equipmentLabel}>
            <Icons.gas size={32} className={css.equipmentIcon} />

            <span>Gas</span>
          </label>
        </li>

        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="water"
            name="water"
            className={css.equipmentCheckbox}
            onChange={handleCheckboxChange}
          />

          <label htmlFor="water" className={css.equipmentLabel}>
            <Icons.water size={32} />

            <span>Water</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default EquipmentFilter;
