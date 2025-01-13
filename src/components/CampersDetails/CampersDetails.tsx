import { BsMap } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const CampersDetails = ({ vehicle }) => {
  return (
    <div>
      <h3>{vehicle.name}</h3>

      <div>
        <div>
          <FaStar size={16} />
          <p>
            {vehicle.rating}({vehicle.reviews.length} Reviews)
          </p>
        </div>

        <div>
          <BsMap size={16} />
          <p>{vehicle.location}</p>
        </div>
      </div>

      <p>&euro;{`${vehicle.price}.00`}</p>

      <ul>
        {vehicle.gallery.map((image) => {
          return (
            <li>
              <img src={image.original} alt={vehicle.name} />
            </li>
          );
        })}
      </ul>

      <p>{vehicle.description}</p>
    </div>
  );
};

export default CampersDetails;
