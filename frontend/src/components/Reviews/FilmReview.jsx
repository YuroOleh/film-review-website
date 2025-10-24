import styles from "../../styles/components/FilmReview.module.css";
import poster_placeholder from "../../assets/poster_placeholder.jpg";
import Review from "../Reviews/Review";

function FilmReview() {
  return (
    <div className={styles.container}>
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

      <div className={styles.reviewContainer}>
        <Review />
      </div>
    </div>
  );
}

export default FilmReview;