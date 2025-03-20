import css from "./CampersDetailsReviews.module.css";
import { useSelector } from "react-redux";
import { selectActiveVehicle } from "../../redux/selectors.ts";
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
      <ul className={css.reviewList}>
        {vehicle.reviews.map((review, index) => {
          return (
            <li key={index}>
              <div className={css.userNameRatingWrapper}>
                <div className={css.nameFrame}>
                  {review.reviewer_name.slice(0, 1)}
                </div>
                <div>
                  <p className={css.userName}>{review.reviewer_name}</p>
                  <ul className={css.ratingList}>
                    {getStars(review.reviewer_rating).map((star, index) => {
                      return <li key={index}>{star}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CampersDetailsReviews;
