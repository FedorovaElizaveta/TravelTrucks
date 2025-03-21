import css from "./CampersDetails.module.css";
import { BsMap } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectActiveVehicle } from "../../redux/selectors.ts";

const CampersDetails = () => {
  const vehicle = useSelector(selectActiveVehicle);

  if (!vehicle)
    return <p className={css.noDetailsMessage}>No vehicle details...</p>;

  const { name, rating, reviews, location, price, gallery, description } =
    vehicle;

  return (
    <div className={css.campersDetailsWrapper}>
      <h3 className={css.name}>{name}</h3>

      <div className={css.ratingAndLocationWrapper}>
        <div className={css.ratingWrapper}>
          <FaStar size={16} className={css.starIcon} />
          <p className={css.rating}>
            {rating}({reviews.length} Reviews)
          </p>
        </div>

        <div className={css.locationWrapper}>
          <BsMap size={16} />
          <p>{location}</p>
        </div>
      </div>

      <p className={css.price}>&euro;{price.toFixed(2)}</p>

      <ul className={css.galleryList}>
        {gallery.map((image) => {
          return (
            <li className={css.galleryListItem} key={image.original}>
              <img
                src={image.original}
                alt={name}
                className={css.vehiclePhoto}
              />
            </li>
          );
        })}
      </ul>

      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CampersDetails;
