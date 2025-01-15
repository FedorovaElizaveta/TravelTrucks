import css from "./VehicleCard.module.css";
import { BsMap, BsSuitHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteVehicles } from "../../redux/slice.js";
import { selectFavouriteVehicles } from "../../redux/selectors.js";
import clsx from "clsx";
import getEquipment from "../../utils/getEquipment.js";

const VehicleCard = ({ vehicle }) => {
  const dispatch = useDispatch();
  const favouriteVehicles = useSelector(selectFavouriteVehicles);

  const manageFavouriteVehicles = () => {
    dispatch(toggleFavouriteVehicles(vehicle));
  };

  const isFavourite = favouriteVehicles.some(
    (favVehicle) => favVehicle.id === vehicle.id
  );

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

            <button
              type="button"
              className={css.favouriteBtn}
              onClick={manageFavouriteVehicles}
            >
              <BsSuitHeart
                size={26}
                className={clsx(css.favouriteBtnIcon, {
                  [css.favouriteActive]: isFavourite,
                })}
              />
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
          {getEquipment(vehicle).map((equipment, index) => (
            <li key={index} className={css.equipmentListItem}>
              {equipment.icon}
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
