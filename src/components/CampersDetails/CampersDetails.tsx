import css from "./CampersDetails.module.css";
import { BsMap } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectActiveVehicle } from "../../redux/selectors.js";

const CampersDetails = () => {
  const vehicle = useSelector(selectActiveVehicle);

  return (
    <div>
      <h3 className={css.name}>{vehicle.name}</h3>

      <div className={css.ratingAndLocationWrapper}>
        <div className={css.ratingWrapper}>
          <FaStar size={16} className={css.starIcon} />
          <p className={css.rating}>
            {vehicle.rating}({vehicle.reviews.length} Reviews)
          </p>
        </div>

        <div className={css.locationWrapper}>
          <BsMap size={16} />
          <p>{vehicle.location}</p>
        </div>
      </div>

      <p className={css.price}>&euro;{`${vehicle.price}.00`}</p>

      <ul className={css.galleryList}>
        {vehicle.gallery.map((image, index) => {
          return (
            <li className={css.galleryListItem} key={index}>
              <img
                src={image.original}
                alt={vehicle.name}
                className={css.vehiclePhoto}
              />
            </li>
          );
        })}
      </ul>

      <p className={css.description}>{vehicle.description}</p>
    </div>
  );
};

export default CampersDetails;
