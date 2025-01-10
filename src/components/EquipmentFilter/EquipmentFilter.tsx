import css from "./EquipmentFilter.module.css";
import { BsWind } from "react-icons/bs";
import { BsDroplet } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { BsUiRadios } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbMicrowave } from "react-icons/tb";
import { BiWater } from "react-icons/bi";

const EquipmentFilter = () => {
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
          />
          <label htmlFor="AC" className={css.equipmentLabel}>
            <BsWind size={32} />
            <span>AC</span>
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="bathroom"
            name="bathroom"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="bathroom" className={css.equipmentLabel}>
            <BsDroplet size={32} />
            <span>Bathroom</span>
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="kitchen"
            name="kitchen"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="kitchen" className={css.equipmentLabel}>
            <BsCupHot size={32} />
            <span>Kitchen</span>
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="TV"
            name="TV"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="TV" className={css.equipmentLabel}>
            <svg width="32" height="32" className={css.equipmentIcon}>
              <use href="/symbol-defs.svg#icon-tv"></use>
            </svg>
            <span>TV</span>
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="radio"
            name="radio"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="radio" className={css.equipmentLabel}>
            <BsUiRadios size={32} />
            <span>Radio</span>
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="refrigerator"
            name="refrigerator"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="refrigerator" className={css.equipmentLabel}>
            <CgSmartHomeRefrigerator size={32} />
            <span>Refrigerator</span>
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="microwave"
            name="microwave"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="microwave" className={css.equipmentLabel}>
            <TbMicrowave size={32} />
            <span>Microwave</span>
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="gas"
            name="gas"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="gas" className={css.equipmentLabel}>
            <svg width="32" height="32" className={css.equipmentIcon}>
              <use href="/symbol-defs.svg#icon-gas"></use>
            </svg>
            <span>Gas</span>
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <input
            type="checkbox"
            id="water"
            name="water"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="water" className={css.equipmentLabel}>
            <BiWater size={32} />
            <span>Water</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default EquipmentFilter;
