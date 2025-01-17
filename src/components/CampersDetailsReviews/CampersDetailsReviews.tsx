import { useSelector } from "react-redux";
import { selectActiveVehicle } from "../../redux/selectors.js";
import { FaStar } from "react-icons/fa";

const CampersDetailsReviews = () => {
  const vehicle = useSelector(selectActiveVehicle);

  function getStars(rating) {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar size={16} color="#FFC531" />);
    }

    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<FaStar size={16} color="#F2F4F7" />);
    }

    return stars;
  }

  return (
    <div>
      <ul>
        {vehicle.reviews.map((review, index) => {
          return (
            <li key={index}>
              <div>
                <div>{review.reviewer_name.slice(0, 1)}</div>
                <div>
                  <p>{review.reviewer_name}</p>
                  {/* <div>
                    {getStars(review.reviewer_rating).map((star, index) => {
                      return star;
                    })}
                  </div> */}
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CampersDetailsReviews;
