import styles from "../../styles/components/MovieCard.module.css";
import { Link } from "react-router-dom";
import { useFilmRating } from "../../hooks/useFilmRating";

function MovieCard({ film }) {
    const date = new Date(film.published);
    const formatted = date.toLocaleDateString("uk-UA");

    const { rating, loading } = useFilmRating(film.id);
    const length_hours = Math.floor(film.length / 60) 
    const length_minutes = film.length % 60

    return (
        <Link to={`/films/details/${film.id}`} className={styles.link}>
            <div className={styles.cardContainer}>
                <img className={styles.moviePoster} src={film.poster} alt={film.title} />
                <div className={styles.headerContainer}>
                    <h2 className={styles.headerContainerH2}>{film.title}</h2>
                    <div className={styles.rating}>
                        <h2 className={styles.headerContainerH2}>
                            {loading ? "..." : rating.toFixed(1)}
                        </h2>
                        <img className={styles.headerIcon} src="icons/star.png" alt="Star" />
                    </div>
                </div>
                <h5 className={styles.description}>
                    {film.description}
                </h5>
                <div className={styles.bottomContainer}>
                    <div className={styles.duration}>
                        <img className={styles.bottomIcon} src="icons/clock.png" alt="Clock" />
                        <p>{length_hours}h {length_minutes}min</p>
                    </div>
                    <div className={styles.date}>
                        <img className={styles.bottomIcon} src="icons/calendar.png" alt="Calendar" />
                        <p>{formatted}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;