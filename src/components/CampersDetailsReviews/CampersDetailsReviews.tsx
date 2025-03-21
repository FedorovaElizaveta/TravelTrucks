import css from "./CampersDetailsReviews.module.css";
import { useSelector } from "react-redux";
import { selectActiveVehicle } from "../../redux/selectors.ts";
import { getStars } from "../../utils/getStars.tsx";

const CampersDetailsReviews = () => {
  const vehicle = useSelector(selectActiveVehicle);

  if (!vehicle) return <p className={css.noReviewsMessage}>No reviews...</p>;

  return (
    <div>
      <ul className={css.reviewList}>
        {vehicle.reviews.map((review, index) => (
          <li key={index}>
            <div className={css.userNameRatingWrapper}>
              <div className={css.nameFrame}>
                {review.reviewer_name.slice(0, 1)}
              </div>

              <div>
                <p className={css.userName}>{review.reviewer_name}</p>

                <ul className={css.ratingList}>
                  {getStars(review.reviewer_rating)}
                </ul>
              </div>
            </div>

            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersDetailsReviews;
