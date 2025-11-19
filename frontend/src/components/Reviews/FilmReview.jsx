import styles from "../../styles/components/FilmReview.module.css";
import poster_placeholder from "../../assets/poster_placeholder.jpg";
import Review from "../Reviews/Review";
import { Link } from "react-router-dom";

function FilmReview() {
  return (
    <div className={styles.container}>
      <Link to="/films/details" className={styles.link}>
        <div className={styles.movieCard}>
          <div className={styles.posterContainer}>
            <img className={styles.posterContainerImg} src={poster_placeholder} />
          </div>
          <div className={styles.movieInfo}>
            <h2 className={styles.movieTitle}>Lorem Ipsum</h2>
            <div className={styles.rating}>
              <p className={styles.ratingMark}>5.0</p>
              <img className={styles.ratingImg} src="/icons/star.png" />
            </div>
          </div>
        </div>
      </Link>

      <Link to="/reviews/details" className={styles.link}>
        <div className={styles.reviewContainer}>
          <Review />
        </div>
      </Link>
    </div>
  );
}

export default FilmReview;