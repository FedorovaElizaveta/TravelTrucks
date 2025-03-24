import { useDispatch, useSelector } from "react-redux";
import css from "./LoadMore.module.css";
import { AppDispatch } from "../../redux/store";
import { incrementPage } from "../../redux/slice";
import { selectLimit, selectPage, selectTotal } from "../../redux/selectors";

const LoadMore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const total = useSelector(selectTotal);
  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);

  const totalPages = Math.ceil(total / limit);

  const manageClick = (): void => {
    dispatch(incrementPage());
  };

  return (
    <>
      {totalPages !== page && (
        <button type="button" onClick={manageClick} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </>
  );
};

export default LoadMore;
