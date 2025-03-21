import { Icons } from "../icons/icons";

export function getStars(rating: number) {
  return Array.from({ length: 5 }, (_, i) => (
    <Icons.star key={i} size={16} color={i < rating ? "#FFC531" : "#F2F4F7"} />
  ));
}
