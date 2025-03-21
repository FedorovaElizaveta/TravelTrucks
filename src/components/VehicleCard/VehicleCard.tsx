import css from "./VehicleCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteVehicles, Vehicle } from "../../redux/slice.ts";
import { selectFavouriteVehicles } from "../../redux/selectors.ts";
import clsx from "clsx";
import getEquipment from "../../utils/getEquipment.tsx";
import { AppDispatch } from "../../redux/store.ts";
import { Icons } from "../../icons/icons.tsx";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favouriteVehicles = useSelector(selectFavouriteVehicles);

  const equipment = getEquipment(vehicle, 20);

  const manageFavouriteVehicles = (): void => {
    dispatch(toggleFavouriteVehicles(vehicle));
  };

  const isFavourite = favouriteVehicles.some(
    (favVehicle) => favVehicle.id === vehicle.id
  );

  return (
    <div className={css.cardWrapper}>
      <img
        // add default imgage
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
              <Icons.heart
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
            <Icons.star size={16} className={css.reviewIcon} />

            <p>
              {vehicle.rating ?? "No rating"} (
              {vehicle.reviews
                ? `${vehicle.reviews.length} Reviews`
                : "No reviews"}
              )
            </p>
          </div>

          <div className={css.locationWrapper}>
            <Icons.map size={16} />

            <p>{vehicle.location}</p>
          </div>
        </div>
        <p className={css.description}>{vehicle.description}</p>

        <ul className={css.equipmentList}>
          {equipment.map((equipment, index) => (
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
