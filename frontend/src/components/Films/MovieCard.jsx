import styles from "../../styles/components/MovieCard.module.css";
import poster_placeholder from "../../assets/poster_placeholder.jpg";

function MovieCard() {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.moviePoster} src={poster_placeholder} alt="" />
            <div className={styles.headerContainer}>
                <h2>Lorem Ipsum</h2>
                <div className={styles.rating}>
                    <h2>5.0</h2>
                    <img className={styles.headerIcon} src="icons/star.png" alt="" />
                </div>
            </div>
            <h5 className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <div className={styles.bottomContainer}>
                <div className={styles.duration}>
                    <img className={styles.bottomIcon} src="icons/clock.png" alt="" />
                    <p>1:30:00</p>
                </div>
                <div className={styles.date}>
                    <img className={styles.bottomIcon} src="icons/calendar.png" alt="" />
                    <p>01.01.25</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;