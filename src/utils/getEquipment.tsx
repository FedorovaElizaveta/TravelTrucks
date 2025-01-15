import { BiWater } from "react-icons/bi";
import { BsCupHot, BsDroplet, BsUiRadios, BsWind } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbMicrowave } from "react-icons/tb";

const getEquipment = (vehicle) => {
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

export default getEquipment;
