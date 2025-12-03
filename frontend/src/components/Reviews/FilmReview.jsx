import styles from "../../styles/components/FilmReview.module.css";
import poster_placeholder from "../../assets/poster_placeholder.jpg";
import Review from "../Reviews/Review";
import { Link } from "react-router-dom";
import { useFetchFilm } from "../../hooks/useFetchFilm";
import { useUser } from "../../hooks/useUser";

function FilmReview({review}) {
  const {film, loading, error} = useFetchFilm(review.film)
  const {user, userLoading, userError} = useUser(review.user)
  console.log(user)

  return (
    <div className={styles.container}>
      <Link to={`/films/details/${film.id}`} className={styles.link}>
        <div className={styles.movieCard}>
          <div className={styles.posterContainer}>
            <img className={styles.posterContainerImg} src={film.poster} />
          </div>
          <div className={styles.movieInfo}>
            <h2 className={styles.movieTitle}>{film.title}</h2>
            <div className={styles.rating}>
              <p className={styles.ratingMark}>{film.rating}</p>
              <img className={styles.ratingImg} src="/icons/star.png" />
            </div>
          </div>
        </div>
      </Link>

      <Link to={`/reviews/details/${review.id}`} className={styles.link}>
        <div className={styles.reviewContainer}>
          <Review review={review} user={user}/>
        </div>
      </Link>
    </div>
  );
}

export default FilmReview;