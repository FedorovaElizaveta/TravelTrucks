import { Icons } from "../icons/icons";
import { Vehicle } from "../redux/slice";

const getEquipment = (vehicle: Vehicle, size: number) => {
  const equipmentData = [
    { name: "AC", icon: <Icons.AC size={size} /> },
    { name: "Bathroom", icon: <Icons.bathroom size={size} /> },
    { name: "Kitchen", icon: <Icons.kitchen size={size} /> },
    { name: "TV", icon: <Icons.TV size={size} /> },
    { name: "Radio", icon: <Icons.radio size={size} /> },
    { name: "Refrigerator", icon: <Icons.refrigerator size={size} /> },
    { name: "Microwave", icon: <Icons.microwave size={size} /> },
    { name: "Gas", icon: <Icons.gas size={size} /> },
    { name: "Water", icon: <Icons.water size={size} /> },
  ];

  return equipmentData.filter((item) =>
    item.name === item.name.toUpperCase()
      ? vehicle[item.name as keyof Vehicle]
      : vehicle[item.name.toLowerCase() as keyof Vehicle]
  );
};

export default getEquipment;
