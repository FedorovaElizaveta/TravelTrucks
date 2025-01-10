import css from "./EquipmentFilter.module.css";
import { BsWind } from "react-icons/bs";
import { BsDroplet } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { IoMdTv } from "react-icons/io";
import { BsUiRadios } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbMicrowave } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { BiWater } from "react-icons/bi";

const EquipmentFilter = () => {
  return (
    <div className={css.equipmentFilterWrapper}>
      <h2 className={css.equipmentHeading}>Vehicle equipment</h2>
      <ul className={css.equipmentList}>
        <li className={css.equipmentListItem}>
          <BsWind size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="AC"
            name="AC"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="AC" className={css.equipmentLabel}>
            AC
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <BsDroplet size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="bathroom"
            name="bathroom"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="bathroom" className={css.equipmentLabel}>
            Bathroom
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <BsCupHot size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="kitchen"
            name="kitchen"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="kitchen" className={css.equipmentLabel}>
            Kitchen
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <IoMdTv size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="TV"
            name="TV"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="TV" className={css.equipmentLabel}>
            TV
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <BsUiRadios size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="radio"
            name="radio"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="radio" className={css.equipmentLabel}>
            Radio
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <CgSmartHomeRefrigerator size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="refrigerator"
            name="refrigerator"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="refrigeratorAC" className={css.equipmentLabel}>
            Refrigerator
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <TbMicrowave size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="microwave"
            name="microwave"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="microwave" className={css.equipmentLabel}>
            Microwave
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <FaGasPump size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="gas"
            name="gas"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="gas" className={css.equipmentLabel}>
            Gas
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <BiWater size={32} className={css.equipmentIcon} />
          <input
            type="checkbox"
            id="water"
            name="water"
            className={css.equipmentCheckbox}
          />
          <label htmlFor="water" className={css.equipmentLabel}>
            Water
          </label>
        </li>
      </ul>
    </div>
  );
};

export default EquipmentFilter;
