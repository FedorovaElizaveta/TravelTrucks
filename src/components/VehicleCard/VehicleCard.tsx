import { BiWater } from "react-icons/bi";
import css from "./VehicleCard.module.css";
import {
  BsCupHot,
  BsDroplet,
  BsMap,
  BsSuitHeart,
  BsUiRadios,
  BsWind,
} from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { TbMicrowave } from "react-icons/tb";
import { Link } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
  const getEquipment = () => {
    const equipmentData = [
      { name: "AC", icon: <BsWind size={20} /> },
      { name: "Bathroom", icon: <BsDroplet size={20} /> },
      { name: "Kitchen", icon: <BsCupHot size={20} /> },
      {
        name: "TV",
        icon: (
          <svg width="20" height="20">
            <use href="/symbol-defs.svg#icon-tv"></use>
          </svg>
        ),
      },
      { name: "Radio", icon: <BsUiRadios size={20} /> },
      { name: "Refrigerator", icon: <CgSmartHomeRefrigerator size={20} /> },
      { name: "Microwave", icon: <TbMicrowave size={20} /> },
      {
        name: "Gas",
        icon: (
          <svg width="20" height="20">
            <use href="/symbol-defs.svg#icon-gas"></use>
          </svg>
        ),
      },
      { name: "Water", icon: <BiWater size={20} /> },
    ];

    return equipmentData.filter((item) =>
      item.name === item.name.toUpperCase()
        ? vehicle[item.name]
        : vehicle[item.name.toLowerCase()]
    );
  };

  return (
    <div className={css.cardWrapper}>
      <img
        src={vehicle.gallery[0].original}
        alt={vehicle.name}
        className={css.image}
      />

      <div>
        <div className={css.nameAndPiceWrapper}>
          <h3 className={css.name}>{vehicle.name}</h3>

          <div className={css.priceWrapper}>
            <p>&euro;{`${vehicle.price}.00`}</p>

            <button type="button" className={css.favouriteBtn}>
              <BsSuitHeart size={26} className={css.favouriteBtnIcon} />
            </button>
          </div>
        </div>
        <div className={css.reviewAndLocationWrapper}>
          <div className={css.reviewWrapper}>
            <FaStar size={16} className={css.reviewIcon} />

            <p>
              {vehicle.rating} ({vehicle.reviews.length} Reviews)
            </p>
          </div>

          <div className={css.locationWrapper}>
            <BsMap size={16} />

            <p>{vehicle.location}</p>
          </div>
        </div>
        <p className={css.description}>{vehicle.description}</p>

        <ul className={css.equipmentList}>
          {getEquipment().map((equipment, index) => (
            <li key={index} className={css.equipmentListItem}>
              {equipment.icon}
              {/* <span>
                {equipment.name.charAt(0).toUpperCase() +
                  equipment.name.slice(1)}
              </span> */}
              <span>{equipment.name}</span>
            </li>
          ))}
        </ul>
        <Link to={`/campers/${vehicle.id}`} className={css.showMoreLink}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
