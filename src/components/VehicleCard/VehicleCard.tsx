import css from "./VehicleCard.module.css";
import { BsMap, BsSuitHeart } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

// "AC": true,
// "bathroom": true,
// "kitchen": false,
// "TV": true,
// "radio": true,
// "refrigerator": false,
// "microwave": true,
// "gas": false,
// "water": true,

const VehicleCard = ({ vehicle }) => {
  const getEquipment = () => {
    const vehicleEquipment = [];

    if (vehicle.AC) vehicleEquipment.push("AC");
    if (vehicle.bathroom) vehicleEquipment.push("Bathroom");
    if (vehicle.kitchen) vehicleEquipment.push("Kitchen");
    if (vehicle.TV) vehicleEquipment.push("TV");
    if (vehicle.radio) vehicleEquipment.push("Radio");
    if (vehicle.refrigerator) vehicleEquipment.push("Refrigerator");
    if (vehicle.microwave) vehicleEquipment.push("Microwave");
    if (vehicle.gas) vehicleEquipment.push("Gas");
    if (vehicle.water) vehicleEquipment.push("Water");

    return vehicleEquipment;
  };

  return (
    <div>
      <p>{vehicle.name}</p>

      <p>&euro;{vehicle.price}</p>

      <button type="button">
        <BsSuitHeart size={26} />
      </button>

      <CiStar size={16} />

      <p>
        {vehicle.rating} ({vehicle.reviews.length} Reviews)
      </p>

      <BsMap size={16} />

      <p>{vehicle.location}</p>

      <p>{vehicle.description}</p>

      <Link to={`/campers/${vehicle.id}`}>Show more</Link>
    </div>
  );
};

export default VehicleCard;
